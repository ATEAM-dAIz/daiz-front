import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { requestLogin } from "../services/AuthService";
import styles from "./Login.module.scss";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const dispatch = useDispatch();

  function changeInput(e) {
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
  }

  async function onSubmit(e) {
    e.preventDefault(); //prevent initialization input
    if (!email.includes("@")) {
      alert("이메일 형식을 입력하세요.");
    } else {
      requestLogin(email, pw)
        .then((result) => console.log(result))
        .catch((err) => console.log(err));

      // dispatch({
      //   type: "login",
      //   payload: {
      //     email: response.email,
      //     isLoggedIn: true,
      //   },
      // });

      // if (typeof response !== "string") {
      //   console.log(typeof response);
      //   // login(response);
      //   history.push("/main");
      // } else {
      //   alert(response);
      // }
    }
  }

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <form className={styles.column} onSubmit={onSubmit} noValidate>
        <input
          name="email"
          type="email"
          placeholder="이메일"
          onChange={changeInput}
          required
          className="input-account"
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={changeInput}
          required
          className="input-account"
        />
        <label htmlFor="keepLogin" className={styles.keepLogin}>
          <input type="checkbox" id="keepLogin" name="keepLogin" />
          로그인 유지
        </label>
        <button className="btn-main" onSubmit={onSubmit}>
          로그인
        </button>
      </form>

      <div className={styles.linkContainer}>
        <p className={styles.link} onClick={() => history.push("/signup")}>
          처음이신가요?
        </p>
        <p className={styles.link}>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default Login;
