import React from "react";
import { useHistory } from "react-router-dom";

import styles from "./TabBar.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../store";

const TabBar = ({ fullScreen }: { fullScreen: boolean }) => {
  console.log(fullScreen);
  const history = useHistory();
  const mainBtn = JSON.parse(
    useAppSelector((state) => state.tabBarReducer.main)
  );
  const writingBtn = JSON.parse(
    useAppSelector((state) => state.tabBarReducer.writing)
  );
  const mypageBtn = JSON.parse(
    useAppSelector((state) => state.tabBarReducer.mypage)
  );

  return (
    <>
      {fullScreen ? (
        <></>
      ) : (
        <div className={styles.icons}>
          <span
            className={styles.element}
            onClick={() => history.push("/main")}
          >
            <FontAwesomeIcon
              icon={faHome}
              className={mainBtn ? styles.selectedBtn : ""}
            />
          </span>
          <span
            className={styles.element}
            onClick={() => history.push("/write")}
          >
            <FontAwesomeIcon
              icon={faPlusCircle}
              className={writingBtn ? styles.selectedBtn : ""}
            />
          </span>
          <span
            className={styles.element}
            onClick={() => history.push("/mypage")}
          >
            <FontAwesomeIcon
              icon={faUser}
              className={mypageBtn ? styles.selectedBtn : ""}
            />
          </span>
        </div>
      )}
    </>
  );
};

export default React.memo(TabBar);
