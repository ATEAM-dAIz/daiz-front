import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Navigation.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Navigation = () => {
  const history = useHistory();
  const mainBtn = useSelector((state) => state.navigationReducer.main);
  const writingBtn = useSelector((state) => state.navigationReducer.writing);
  const mypageBtn = useSelector((state) => state.navigationReducer.mypage);

  return (
    <div className={styles.icons}>
      <FontAwesomeIcon
        icon={faHome}
        onClick={() => history.push("/main")}
        className={mainBtn && styles.selectedBtn}
      />
      <FontAwesomeIcon
        icon={faPlusCircle}
        onClick={() => history.push("/write")}
        className={writingBtn && styles.selectedBtn}
      />
      <FontAwesomeIcon
        icon={faUser}
        onClick={() => history.push("/mypage")}
        className={mypageBtn && styles.selectedBtn}
      />
    </div>
  );
};

export default Navigation;
