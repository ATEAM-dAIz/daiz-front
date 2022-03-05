import React, { useEffect } from "react";

import TextPreview from "../../components/TextPreview";
import Navigation from "../../components/Navigation";

import styles from "./Mypage.module.scss";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Mypage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "CLICK_MYPAGE",
      payload: {
        mypage: "true",
      },
    });
  }, [dispatch]);

  const onClick = () => {
    dispatch({
      type: "LOGOUT_USER",
      payload: {
        isLoggedIn: false,
      },
    });
  };

  return (
    <div className={styles.container}>
      <h1>일기 목록</h1>
      {/* 로그아웃 위치 미정 */}
      <div className={styles.btnLogout} onClick={onClick}>
        로그아웃
      </div>
      <div
        className={styles.btnLogout}
        onClick={() => history.push("/change_password")}
      >
        비밀번호 변경
      </div>
      <div className={styles.mySwiper}>
        {}
        <TextPreview />
      </div>

      <Navigation className={styles.navigation} />
    </div>
  );
};

export default Mypage;
