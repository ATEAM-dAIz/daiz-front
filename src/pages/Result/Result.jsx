import React, { useEffect, useState } from "react";

import styles from "./Result.module.scss";
import Navigation from "../../components/Navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getDiaryDetail } from "../../services/DiaryService";

const Result = ({ location }) => {
  let diary_id = "";
  if (location.id) {
    localStorage.setItem("diary_id", location.id);
    diary_id = location.id;
  } else {
    diary_id = localStorage.getItem("diary_id");
  }

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [swipeUp, getSwipeUp] = useState(false);
  const refresh_token = useSelector((state) => state.userReducer.refresh_token);

  useEffect(() => {
    const get = async () => {
      await getDiaryDetail(refresh_token, diary_id).then((response) => {
        setTitle(response["title"]);
        setContent(response["content"]);
        setUsername(response["user"]);
      });
    };
    get();
  }, [refresh_token, diary_id]);

  return (
    <div className={styles.container}>
      <p className={styles.day}>SUN</p>
      <p className={styles.date}>2021.11.07</p>
      <hr />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{content}</p>
      <div className={swipeUp ? styles.extended : styles.commentContainer}>
        <FontAwesomeIcon
          icon={swipeUp ? faChevronDown : faChevronUp}
          className={styles.chevronUp}
          onClick={() => getSwipeUp(!swipeUp)}
        />
        <h1 className={styles.commentTitle}>오늘의 코멘트</h1>
        <p className={styles.commentContent}>
          {username.split("@")[0]}님
          <br />
          {/* 아침에 작성할 경우: 오늘 하루도 화이팅! */}
          오늘 하루도 수고하셨어요! <br />
          현재 {username.split("@")[0]}님은 [가족관계] 상황에 놓여져있고,
          [분노]를 느끼시고 있네요.
          <br />
          <br />
          화가 폭발할 것 같을 때는 그 자리를 피하는 것도 좋은 방법이라고
          생각해요
        </p>
      </div>

      <Navigation />
    </div>
  );
};

export default Result;
