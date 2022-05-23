import React from "react";
import { useHistory } from "react-router";
import styles from "./Page404.module.scss";

const Page404 = () => {
  const history = useHistory();
  const onClick = () => {
    history.goBack();
  };
  return (
    <div className={styles.container}>
      <p>잘못된 접근입니다.</p>
      <button onClick={onClick}>뒤로가기</button>
    </div>
  );
};

export default Page404;
