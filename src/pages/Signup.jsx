import React from "react";

import { ReactComponent as Logo } from "../assets/logo.svg";
import styles from "./Signup.module.scss";

const Signup = ({ history }) => {
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
        <input
          name="reEnterPassword"
          type="password"
          placeholder="비밀번호 확인"
          required
          className="input-account"
        />
        <input
          name="nickname"
          type="text"
          placeholder="닉네임"
          required
          className="input-account"
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
