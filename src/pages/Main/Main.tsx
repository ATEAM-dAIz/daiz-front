import { useCallback, useEffect, useState, lazy, Suspense } from "react";
import styles from "./Main.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faCompressAlt } from "@fortawesome/free-solid-svg-icons";
import { clickMain } from "../../store/modules/tab_bar";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavBar from "../../components/NavBar";
import { useAppDispatch } from "../../store";

const CalendarBox = lazy(() => import("../../components/CalendarBox"));
const TextPreview = lazy(() => import("../../components/TextPreview"));
const TabBar = lazy(() => import("../../components/TabBar"));

const Main = () => {
  const dispatch = useAppDispatch();
  const [fullScreen, setFullScreen] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);

  const { width } = useWindowDimensions();

  const onClick = useCallback(() => {
    setFullScreen(!fullScreen);
  }, [fullScreen]);

  useEffect(() => {
    width > 1024 ? setShowNavBar(true) : setShowNavBar(false);
  }, [width]);

  useEffect(() => dispatch(clickMain() as any), [dispatch]);

  return (
    <div className={fullScreen ? styles.dimmer : styles.container}>
      {showNavBar && <NavBar />}
      <Suspense fallback={<p>로딩중...</p>}>
        <CalendarBox fullScreen={fullScreen} />

        <FontAwesomeIcon
          icon={fullScreen ? faCompressAlt : faExpandAlt}
          className={styles.fullScreenBtn}
          onClick={onClick}
        />

        <div className={fullScreen ? styles.mySwiperMoved : styles.mySwiper}>
          <TextPreview />
        </div>

        {!showNavBar && <TabBar fullScreen={fullScreen} />}
      </Suspense>
    </div>
  );
};

export default Main;
