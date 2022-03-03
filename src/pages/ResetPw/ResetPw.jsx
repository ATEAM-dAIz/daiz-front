import React, { useState } from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { resetPassword } from "../../services/AuthService";

import styles from "./ResetPw.module.scss";

const ResetPw = () => {
  const [email, setEmail] = useState("");

  async function onSubmit(e) {
    e.preventDefault(); //prevent initialization input
    if (!email.includes("@")) {
      alert("이메일 형식을 입력하세요.");
    } else {
      await resetPassword(email).then((response) => {
        console.log(response);
      });
    }
  }

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <form className={styles.column} onSubmit={onSubmit} noValidate>
        <p>가입하신 이메일 주소로 비밀번호 재설정 링크가 전송됩니다.</p>
        <input
          name="email"
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-account"
        />
        <button className={`btn-main ${styles.confirmBtn}`} type="submit">
          찾기
        </button>
      </form>
    </div>
  );
};

export default ResetPw;
