import { useEffect, useState } from "react";

import TextPreview from "../../components/TextPreview";
import TabBar from "../../components/TabBar";
import styles from "./Mypage.module.scss";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/modules/info";
import { clickMypage } from "../../store/modules/tab_bar";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavBar from "../../components/NavBar";
import { useAppDispatch } from "../../store";

const Mypage = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [showNavBar, setShowNavBar] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    width > 1024 ? setShowNavBar(true) : setShowNavBar(false);
  }, [width]);

  useEffect(() => dispatch(clickMypage() as any), [dispatch]);

  return (
    <>
      {showNavBar && <NavBar />}
      <div className={styles.container}>
        <h1>일기 목록</h1>
        {!showNavBar && (
          <div>
            <div
              className={styles.btnLogout}
              onClick={() => dispatch(logout())}
            >
              로그아웃
            </div>
            <div
              className={styles.btnLogout}
              onClick={() => history.push("/change_password")}
            >
              비밀번호 변경
            </div>
          </div>
        )}
        <div className={styles.mySwiper}>
          <TextPreview />
        </div>

        {!showNavBar && <TabBar />}
      </div>
    </>
  );
};

export default Mypage;
