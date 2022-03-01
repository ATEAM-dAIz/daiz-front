import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import styles from "./ResetPw.module.scss";

const ResetPw = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <form className={styles.column} noValidate>
        <input
          name="email"
          type="email"
          placeholder="이메일"
          //   onChange={changeInput}
          required
          className="input-account"
        />
        <button className={`btn-main ${styles.loginBtn}`}>찾기</button>
      </form>
      <p>비밀번호는 가입시 입력하신 이메일을 통해 찾을 수 있습니다.</p>
    </div>
  );
};

export default ResetPw;
