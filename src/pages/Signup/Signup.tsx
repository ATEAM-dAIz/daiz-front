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
  const [loading, setLoading] = useState(false);

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
    else if (pw.length < 8) alert("8자리 이상으로 입력해주세요.");
    else if (rePw !== pw) alert("비밀번호가 다릅니다.");
    else {
      setLoading(true);
      const response = await requestSignup(email, name, pw, rePw);
      setLoading(false);
      if (response !== "error") {
        alert("가입이 완료되었습니다!");
        history.push("/main");
      }
    }
  };

  const buttonProps = loading ? { disabled: true } : {};

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
        <button
          type="submit"
          className={`btn-main ${styles.btn}`}
          {...buttonProps}
        >
          {loading ? <div className={styles.loading}></div> : "회원가입"}
        </button>
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
