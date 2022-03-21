import React, { useCallback, useEffect, useState, lazy, Suspense } from "react";
import styles from "./Main.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faCompressAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { clickMain } from "../../store/modules/tab_bar";

const CalendarBox = lazy(() => import("../../components/CalendarBox"));
const TextPreview = lazy(() => import("../../components/TextPreview"));
const TabBar = lazy(() => import("../../components/TabBar"));

const Main = () => {
  const dispatch = useDispatch();
  const [fullScreen, setFullScreen] = useState(false);

  const onClick = useCallback(() => {
    setFullScreen(!fullScreen);
  }, [fullScreen]);

  useEffect(() => dispatch(clickMain("true")), [dispatch]);

  return (
    <div className={fullScreen ? styles.dimmer : styles.container}>
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

        <TabBar fullScreen={fullScreen} />
      </Suspense>
    </div>
  );
};

export default Main;
