import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./TabBar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const TabBar = () => {
  const history = useHistory();
  const mainBtn = useSelector((state) => state.tabBarReducer.main);
  const writingBtn = useSelector((state) => state.tabBarReducer.writing);
  const mypageBtn = useSelector((state) => state.tabBarReducer.mypage);

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

export default React.memo(TabBar);
