import React from "react";

import styles from "./Navigation.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ fullScreen }) => {
  return (
    <div className={styles.icons}>
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faPlusCircle} />
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};

export default Navigation;
