import React, { useEffect, useState } from "react";
import CalendarBox from "../../components/CalendarBox";
import TextPreview from "../../components/TextPreview";
import TabBar from "../../components/TabBar";

import styles from "./Main.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faCompressAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { clickMain } from "../../store/modules/tab_bar";

const Main = () => {
  const dispatch = useDispatch();
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    dispatch(clickMain("true"));
  }, [dispatch]);

  return (
    <div className={fullScreen ? styles.dimmer : styles.container}>
      <CalendarBox fullScreen={fullScreen} />

      <FontAwesomeIcon
        icon={fullScreen ? faCompressAlt : faExpandAlt}
        className={styles.fullScreenBtn}
        onClick={() => setFullScreen(!fullScreen)}
      />

      <div className={fullScreen ? styles.mySwiperMoved : styles.mySwiper}>
        <TextPreview />
      </div>

      <TabBar fullScreen={fullScreen} />
    </div>
  );
};

export default Main;
