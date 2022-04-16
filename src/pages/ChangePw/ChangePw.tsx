import { useCallback, useEffect, useMemo, useState } from "react";

import { changePassword } from "../../services/AuthService";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavBar from "../../components/NavBar";
import styles from "./ChangePw.module.scss";
import { RootState } from "../../store";

const ChangePw = () => {
  const history = useHistory();
  const [newPw, setNewPw] = useState("");
  const [reNewPw, setReNewPw] = useState("");
  const refresh_token = useSelector(
    (state: RootState) => state.userReducer.refresh_token
  );
  const [showNavBar, setShowNavBar] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    width > 1024 ? setShowNavBar(true) : setShowNavBar(false);
  }, [width]);

  const onChange = useCallback((e: any) => {
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

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await changePassword(newPw, reNewPw, refresh_token).then(() =>
      history.push("/main")
    );
  };

  return (
    <>
      {showNavBar && <NavBar />}
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
            onChange={onChange}
            required
            className="input-account"
          />
          <input
            name="re-password"
            type="password"
            autoComplete="current-password"
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
    </>
  );
};

export default ChangePw;
