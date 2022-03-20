import React, { useEffect } from "react";

import TextPreview from "../../components/TextPreview";
import TabBar from "../../components/TabBar";

import styles from "./Mypage.module.scss";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/modules/info";
import { clickMypage } from "../../store/modules/tab_bar";

const Mypage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(clickMypage("true"));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>일기 목록</h1>
      {/* 로그아웃 위치 미정 */}
      <div className={styles.btnLogout} onClick={() => dispatch(logout())}>
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

      <TabBar />
    </div>
  );
};

export default Mypage;
