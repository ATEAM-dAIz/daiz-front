import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { resetPasswordConfirm } from "../../services/AuthService";

import styles from "./ResetPwConfirm.module.scss";

const ResetPw = () => {
  const history = useHistory();
  const { uid, token } = useParams();
  const [newPw, setNewPw] = useState("");
  const [reNewPw, setReNewPw] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    await resetPasswordConfirm(newPw, reNewPw, uid, token).then(() =>
      newPw !== reNewPw
        ? alert("비밀번호가 일치하지 않습니다.")
        : history.push("/")
    );
  }

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <form className={styles.column} onSubmit={onSubmit} noValidate>
        <input
          name="password"
          type="password"
          placeholder="새 비밀번호"
          onChange={(e) => setNewPw(e.target.value)}
          required
          className="input-account"
        />
        <input
          name="password2"
          type="password"
          placeholder="새 비밀번호 확인"
          onChange={(e) => setReNewPw(e.target.value)}
          required
          className="input-account"
        />
        <button className={`btn-main ${styles.confirmBtn}`}>
          비밀번호 변경
        </button>
      </form>
    </div>
  );
};

export default ResetPw;
