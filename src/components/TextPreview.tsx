import { useEffect, useState } from "react";

import styles from "./TextPreview.module.scss";
import { useHistory } from "react-router-dom";

import { getDiary } from "../services/DiaryService";
import { insertDate } from "../store/modules/diary";
import { useAppDispatch, useAppSelector } from "../store";

const TextPreview = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [diary, setDiary] = useState<any[]>([]);
  const refresh_token = useAppSelector(
    (state) => state.userReducer.refresh_token
  );

  // val type 확실 X
  const onClick = (id: number) => {
    history.push({ pathname: "/result", state: id });
  };

  useEffect(() => {
    const createCalendar = (
      response: {
        id: number;
        title: string;
        content: string;
        updated_at: string;
      }[] = []
    ) => {
      let dateSet = new Set();
      for (const diary of response) {
        dateSet.add(diary["updated_at"].split(/T.+/)[0]);
      }
      return Array.from(dateSet);
    };

    const get = async () => {
      const response = await getDiary(refresh_token);
      const dateArray = createCalendar(response) as Array<string>;
      setDiary([...response]);
      dispatch(insertDate(dateArray));
    };

    get();
  }, [refresh_token, dispatch]);

  return diary.length !== 0 ? (
    <>
      {diary.map((info, idx) => (
        <div
          className={styles.container}
          key={idx}
          onClick={() => onClick(info["id"])}
        >
          <div className={styles.wrapper}>
            <p className={styles.date}>{info["updated_at"].split(/T.+/)[0]}</p>
            <p className={styles.title}>{info["title"]}</p>
          </div>
        </div>
      ))}
    </>
  ) : (
    <div></div>
  );
};

export default TextPreview;
