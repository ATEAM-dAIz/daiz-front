import React from "react";
import CalendarBox from "../components/CalendarBox";
import Navigation from "../components/Navigation";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.container}>
      <CalendarBox />
      <Navigation />
    </div>
  );
};

export default Main;
