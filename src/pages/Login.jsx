import React from "react";

import { ReactComponent as Logo } from "../assets/logo.svg";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <form className={styles.column} noValidate>
        <input
          name="id"
          type="text"
          placeholder="아이디"
          required
          className="input-account"
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          className="input-account"
        />
        <label htmlFor="keepLogin" className={styles.keepLogin}>
          <input type="checkbox" id="keepLogin" name="keepLogin" />
          로그인 유지
        </label>
        <button className="btn-main">로그인</button>
      </form>

      <div className={styles.linkContainer}>
        <p className={styles.link}>처음이신가요?</p>
        <p className={styles.link}>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default Login;
