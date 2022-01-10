import React from "react";

import styles from "./Navigation.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faPlusCircle} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default Navigation;
