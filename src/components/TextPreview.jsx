import React from "react";

import styles from "./TextPreview.module.scss";

const TextPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.date}>2022/01/15</p>
        <p className={styles.title}>코로나 검사 받은 날</p>
      </div>
    </div>
  );
};

export default TextPreview;
