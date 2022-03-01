import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import styles from "./ResetPw.module.scss";

const ResetPw = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <form className={styles.column} noValidate>
        <input
          name="password"
          type="password"
          placeholder="새 비밀번호"
          //   onChange={changeInput}
          required
          className="input-account"
        />
        <input
          name="password2"
          type="password"
          placeholder="새 비밀번호 확인"
          //   onChange={changeInput}
          required
          className="input-account"
        />
        <button className={`btn-main ${styles.loginBtn}`}>비밀번호 변경</button>
      </form>
    </div>
  );
};

export default ResetPw;
