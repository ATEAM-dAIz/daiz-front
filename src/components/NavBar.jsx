import React from "react";
import { useHistory } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const history = useHistory();
  return (
    <div className={styles.container}>
      <ul onClick={() => history.push("/main")}>홈</ul>
      <ul onClick={() => history.push("/write")}>일기 쓰기</ul>
      <DropDownMenu />
    </div>
  );
};

export default NavBar;
