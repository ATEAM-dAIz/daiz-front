import React, { useMemo, useState } from "react";

import { useDispatch } from "react-redux";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { requestLogin } from "../../services/AuthService";
import { login } from "../../store/modules/info";
import styles from "./Login.module.scss";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const dispatch = useDispatch();

  const changeInput = (e) => {
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      alert("이메일 형식을 입력하세요.");
    } else {
      let result = {};
      await requestLogin(email, pw).then((response) => {
        result = response;
      });

      dispatch(
        login(
          result["user"]["email"],
          result["refresh_token"],
          result["user"]["name"],
          true
        )
      );
      result["user"]["email"]
        ? history.push("/main")
        : alert("정보 불러오기 실패");
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
          name="email"
          type="email"
          autoComplete="current-email"
          placeholder="이메일"
          onChange={changeInput}
          required
          className="input-account"
        />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="비밀번호"
          onChange={changeInput}
          required
          className="input-account"
        />
        <button className={`btn-main ${styles.loginBtn}`} onSubmit={onSubmit}>
          로그인
        </button>
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
