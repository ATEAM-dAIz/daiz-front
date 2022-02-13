import React, { useEffect, useState } from "react";

import styles from "./TextPreview.module.scss";
import { useHistory } from "react-router-dom";

import { getDiary } from "../services/DiaryService";
import { useSelector } from "react-redux";

const TextPreview = () => {
  const history = useHistory();
  const [diary, setDiary] = useState([]);
  const refresh_token = useSelector((state) => state.userReducer.refresh_token);

  useEffect(() => {
    const get = async () => {
      await getDiary(refresh_token).then((response) => {
        setDiary([...response]);
      });
    };
    get();
  }, [refresh_token]);

  return diary.map((val, idx) => {
    return (
      <div
        className={styles.container}
        key={idx}
        onClick={() => history.push("/result")}
      >
        {/* <div className={styles.wrapper}>
          <p className={styles.date}>{val["updated_at"].split(/T.+/)}</p>
          <p className={styles.title}>{val["title"]}</p>
        </div> */}
      </div>
    );
  });
};

export default TextPreview;
