import React from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import styles from "./ResetPw.module.scss";

const ResetPw = () => {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <form className={styles.column} noValidate>
        <p>가입하신 이메일 주소로 비밀번호 재설정 링크가 전송됩니다.</p>
        <input
          name="email"
          type="email"
          placeholder="이메일"
          //   onChange={changeInput}
          required
          className="input-account"
        />
        <button className={`btn-main ${styles.confirmBtn}`}>찾기</button>
      </form>
    </div>
  );
};

export default ResetPw;
