import React from "react";

import styles from "./TextPreview.module.scss";
import { useHistory } from "react-router-dom";

// JSON 배열
const json_example = [
  { date: "03-12-2021", title: "코로나 검사 받은 날" },
  { date: "07-12-2021", title: "브루클린 나인나인" },
  { date: "12-12-2021", title: "오늘 힘들었다..." },
  { date: "13-12-2021", title: "곧 종강이다!!!" },
  { date: "03-01-2022", title: "벌써 24살이라니" },
  { date: "07-01-2022", title: "벌써 일주일이나 지남" },
  { date: "12-01-2022", title: "특강 들으러 해운대 다녀옴" },
  { date: "13-01-2022", title: "이게 겨울날씨라니" },
  { date: "15-01-2022", title: "여행가고 싶다" },
  // { date: "23-01-2022", title: "All Too Well" },
  // { date: "25-01-2022", title: "올해에는 더 열심히 살자" },
];

const TextPreview = ({ id }) => {
  const history = useHistory();
  return (
    <div className={styles.container} onClick={() => history.push("/result")}>
      <div className={styles.wrapper}>
        <p className={styles.date}>{json_example[id]["date"]}</p>
        <p className={styles.title}>{json_example[id]["title"]}</p>
      </div>
    </div>
  );
};

export default TextPreview;
