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
    const createCalendar = (response) => {
      let dateSet = new Set();
      for (let diary of response) {
        dateSet.add(diary["updated_at"].split(/T.+/)[0]);
      }
      return Array.from(dateSet);
    };

    const get = async () => {
      const response = await getDiary(refresh_token);
      const dateArray = createCalendar(response);
      setDiary([...response]);
      dispatch({
        type: "INSERT_DATE",
        payload: {
          date: dateArray,
        },
      });
    };

    get();
  }, [refresh_token, dispatch]);

  return diary.length !== 0 ? (
    diary.map((val, idx) => {
      return (
        <div
          className={styles.container}
          key={idx}
          onClick={() => history.push({ pathname: "/result", id: val["id"] })}
        >
          <div className={styles.wrapper}>
            <p className={styles.date}>{val["updated_at"].split(/T.+/)[0]}</p>
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
