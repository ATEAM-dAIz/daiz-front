import React from "react";

import TextPreview from "./../components/TextPreview";

import styles from "./Mypage.module.scss";
import Navigation from "./../components/Navigation";

const Mypage = () => {
  return (
    <div className={styles.container}>
      <h1>일기 목록</h1>

      <div className={styles.mySwiper}>
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
      <Navigation className={styles.navigation} />
    </div>
  );
};

export default Mypage;
