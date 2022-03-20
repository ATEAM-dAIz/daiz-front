import React, { useMemo, useState } from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { resetPassword } from "../../services/AuthService";

import styles from "./ResetPw.module.scss";

const ResetPw = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault(); //prevent initialization input
    if (!email.includes("@")) {
      alert("이메일 형식을 입력하세요.");
    } else {
      setLoading(true);
      await resetPassword(email).then(() => {
        alert("이메일을 확인해 주세요.");
      });
      setLoading(false);
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
        <p>가입하신 이메일 주소로 비밀번호 재설정 링크가 전송됩니다.</p>
        <input
          name="email"
          type="email"
          autoComplete="current-email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-account"
        />
        <button className={`btn-main ${styles.confirmBtn}`} type="submit">
          {loading ? <div className={styles.loading}></div> : "찾기"}
        </button>
      </form>
    </div>
  );
};

export default ResetPw;
