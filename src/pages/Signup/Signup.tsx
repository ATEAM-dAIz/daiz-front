import { useCallback, useMemo, useState } from "react";
import { RouteComponentProps } from "react-router";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { requestSignup } from "../../services/AuthService";
import styles from "./Signup.module.scss";

const Signup: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");
  const [name, setName] = useState("");

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { name, value },
      } = e;
      switch (name) {
        case "email":
          setEmail(value);
          break;
        case "password":
          setPw(value);
          break;
        case "reEnterPassword":
          setRePw(value);
          break;
        case "name":
          setName(value);
          break;
        default:
      }
    },
    []
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.includes("@")) alert("이메일 형식을 입력하세요.");
    else if (rePw !== pw) alert("비밀번호를 확인하세요.");
    else {
      const response = await requestSignup(email, name, pw, rePw);
      response !== "error" && history.push("/main");
    }
  };

  return (
    <div className={styles.container}>
      {useMemo(
        () => (
          <Logo className={styles.logo} />
        ),
        []
      )}
      <form className={styles.column} onSubmit={onSubmit} noValidate>
        <input
          value={email}
          name="email"
          type="email"
          autoComplete="new-email"
          placeholder="이메일"
          className="input-account"
          onChange={onChangeInput}
          required
        />
        <input
          value={pw}
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호"
          className="input-account"
          onChange={onChangeInput}
          required
        />
        <input
          value={rePw}
          name="reEnterPassword"
          type="password"
          autoComplete="new-password"
          placeholder="비밀번호 확인"
          className="input-account"
          onChange={onChangeInput}
          required
        />
        <input
          value={name}
          name="name"
          type="text"
          autoComplete="new-name"
          placeholder="닉네임"
          className="input-account"
          onChange={onChangeInput}
          required
        />
        <button className={`btn-main ${styles.btn}`}>회원가입</button>
      </form>

      <div className={styles.linkContainer}>
        <p className={styles.link} onClick={() => history.push("/")}>
          이미 가입하셨나요?
        </p>
      </div>
    </div>
  );
};

export default Signup;
