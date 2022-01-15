import React, { useState } from "react";
import CalendarBox from "../components/CalendarBox";
import TextPreview from "../components/TextPreview";
import Navigation from "../components/Navigation";

import styles from "./Main.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faCompressAlt } from "@fortawesome/free-solid-svg-icons";

const Main = ({ history }) => {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div className={fullScreen ? styles.dimmer : styles.container}>
      <CalendarBox fullScreen={fullScreen} />

      <FontAwesomeIcon
        icon={fullScreen ? faCompressAlt : faExpandAlt}
        className={styles.fullScreenBtn}
        onClick={() => setFullScreen(!fullScreen)}
      />

      <div className={fullScreen ? styles.mySwiperMoved : styles.mySwiper}>
        <TextPreview id={0} />
        <TextPreview id={1} />
        <TextPreview id={2} />
        <TextPreview id={3} />
        <TextPreview id={4} />
        <TextPreview id={5} />
        <TextPreview id={6} />
        <TextPreview id={7} />
        <TextPreview id={8} />
      </div>

      <Navigation fullScreen={fullScreen} />
    </div>
  );
};

export default Main;
