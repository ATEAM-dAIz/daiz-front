import { useMemo, useState } from "react";
import { RouteComponentProps } from "react-router";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { requestLogin } from "../../services/AuthService";
import { useAppDispatch } from "../../store";
import { login } from "../../store/modules/info";
import styles from "./Login.module.scss";

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const dispatch = useAppDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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

      default:
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("이메일 형식을 입력하세요.");
    } else {
      let result: {
        user: { email: string; name: string };
        refresh_token: string;
      };
      result = await requestLogin(email, pw);
      if (Object.keys(result)[0] === "non_field_errors") {
        alert("아이디 혹은 비밀번호를 확인 해주세요.");
        history.push("/");
      } else {
        dispatch(
          login(
            result["user"]["email"],
            result["refresh_token"],
            result["user"]["name"],
            true
          )
        );
        history.push("/main");
      }
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
      <form
        method="GET"
        className={styles.column}
        onSubmit={onSubmit}
        noValidate
      >
        <input
          name="email"
          type="email"
          autoComplete="current-email"
          placeholder="이메일"
          onChange={onChangeInput}
          required
          className="input-account"
        />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="비밀번호"
          onChange={onChangeInput}
          required
          className="input-account"
        />
        <button className={`btn-main ${styles.loginBtn}`}>로그인</button>
      </form>

      <div className={styles.linkContainer}>
        <p className={styles.link} onClick={() => history.push("/signup")}>
          처음이신가요?
        </p>
        <p
          className={styles.link}
          onClick={() => history.push("/reset_password")}
        >
          비밀번호를 잊으셨나요?
        </p>
      </div>
    </div>
  );
};

export default Login;
