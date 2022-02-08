import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./Navigation.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const history = useHistory();
  return (
    <div className={styles.icons}>
      <FontAwesomeIcon icon={faHome} onClick={() => history.push("/main")} />
      <FontAwesomeIcon
        icon={faPlusCircle}
        onClick={() => history.push("/write")}
      />
      <FontAwesomeIcon icon={faUser} onClick={() => history.push("/mypage")} />
    </div>
  );
};

export default Navigation;
