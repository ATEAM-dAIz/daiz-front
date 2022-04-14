import { useEffect, useState } from "react";

import styles from "./TextPreview.module.scss";
import { useHistory } from "react-router-dom";

import { getDiary } from "../services/DiaryService";
import { useDispatch, useSelector } from "react-redux";
import { insertDate } from "../store/modules/diary";
import { RootState } from "../store";

const TextPreview = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [diary, setDiary] = useState<any[]>([]);
  const refresh_token = useSelector(
    (state: RootState) => state.userReducer.refresh_token
  );

  // val type 확실 X
  const onClick = (val: { [key: string]: any }) => {
    history.push({ pathname: "/result", state: { id: val["id"] } });
  };

  useEffect(() => {
    const createCalendar = (response: any) => {
      let dateSet = new Set();
      for (const diary of response) {
        dateSet.add(diary["updated_at"].split(/T.+/)[0]);
      }
      return Array.from(dateSet);
    };

    const get = async () => {
      const response = await getDiary(refresh_token);
      const dateArray = createCalendar(response);
      setDiary([...response]);
      dispatch(insertDate(dateArray));
    };

    get();
  }, [refresh_token, dispatch]);

  return diary.length !== 0 ? (
    <>
      {diary.map((val, idx) => {
        return (
          <div
            className={styles.container}
            key={idx}
            onClick={(val) => onClick(val)}
          >
            <div className={styles.wrapper}>
              <p className={styles.date}>{val["updated_at"].split(/T.+/)[0]}</p>
              <p className={styles.title}>{val["title"]}</p>
            </div>
          </div>
        );
      })}
    </>
  ) : (
    <div></div>
  );
};

export default TextPreview;
