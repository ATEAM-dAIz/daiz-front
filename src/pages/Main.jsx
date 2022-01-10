import React from "react";
import CalendarBox from "../components/CalendarBox";
import TextPreview from "../components/TextPreview";
import Navigation from "../components/Navigation";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.container}>
      <CalendarBox />
      <TextPreview />
      <Navigation />
    </div>
  );
};

export default Main;
