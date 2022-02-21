import React, { useEffect, useState } from "react";

import styles from "./TextPreview.module.scss";
import { useHistory } from "react-router-dom";

import { getDiary } from "../services/DiaryService";
import { useDispatch, useSelector } from "react-redux";

const TextPreview = () => {
  const dispatch = useDispatch();
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

  return diary.length !== 0 ? (
    diary.map((val, idx) => {
      let date = val["updated_at"].split(/T.+/)[0];
      if (idx === 0) {
        dispatch({
          type: "PREPEND_DATE",
          payload: {
            date: date,
          },
        });
      } else {
        dispatch({
          type: "INSERT_DATE",
          payload: {
            date: date,
          },
        });
      }

      return (
        <div
          className={styles.container}
          key={idx}
          onClick={() => history.push({ pathname: "/result", id: val["id"] })}
        >
          <div className={styles.wrapper}>
            <p className={styles.date}>{date}</p>
            <p className={styles.title}>{val["title"]}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div></div>
  );
};

export default TextPreview;
