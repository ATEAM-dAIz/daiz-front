import React, { useCallback, useMemo, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { resetPasswordConfirm } from "../../services/AuthService";

import styles from "./ResetPwConfirm.module.scss";

const ResetPw = () => {
  const history = useHistory();
  const { uid, token } = useParams();
  const [newPw, setNewPw] = useState("");
  const [reNewPw, setReNewPw] = useState("");

  const onChange = useCallback((e) => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "password":
        setNewPw(value);
        break;
      case "re-password":
        setReNewPw(value);
        break;
      default:
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await resetPasswordConfirm(newPw, reNewPw, uid, token).then(() =>
      newPw !== reNewPw
        ? alert("비밀번호가 일치하지 않습니다.")
        : history.push("/")
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
          autoComplete="new-password"
          placeholder="새 비밀번호"
          onChange={onChange}
          required
          className="input-account"
        />
        <input
          name="re-password"
          type="password"
          autoComplete="new-password"
          placeholder="새 비밀번호 확인"
          onChange={onChange}
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
