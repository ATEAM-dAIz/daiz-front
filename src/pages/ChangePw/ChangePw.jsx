import React, { useMemo, useState } from "react";

import { changePassword } from "../../services/AuthService";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import styles from "./ChangePw.module.scss";

const ChangePw = () => {
  const history = useHistory();
  const [newPw, setNewPw] = useState("");
  const [reNewPw, setReNewPw] = useState("");
  const refresh_token = useSelector((state) => state.userReducer.refresh_token);

  const onSubmit = async (e) => {
    e.preventDefault();
    await changePassword(newPw, reNewPw, refresh_token).then(() =>
      history.push("/main")
    );
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
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="새 비밀번호"
          onChange={(e) => setNewPw(e.target.value)}
          required
          className="input-account"
        />
        <input
          name="password2"
          type="password"
          autoComplete="current-password"
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

export default ChangePw;
