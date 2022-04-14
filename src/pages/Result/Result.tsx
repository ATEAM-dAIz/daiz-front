import { useCallback, useEffect, useState } from "react";

import styles from "./Result.module.scss";
import TabBar from "../../components/TabBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getDiaryDetail } from "../../services/DiaryService";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavBar from "../../components/NavBar";
import { RootState } from "../../store";

const Result = ({ location }: { location: any }) => {
  const [loading, setLoading] = useState(false);
  const [wait, setWait] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [day, setDay] = useState("");
  const [swipeUp, getSwipeUp] = useState(false);
  const refresh_token = useSelector(
    (state: RootState) => state.userReducer.refresh_token
  );
  const username = useSelector(
    (state: RootState) => state.userReducer.username
  );
  const [showNavBar, setShowNavBar] = useState(false);
  const { width } = useWindowDimensions();

  const onClick = useCallback(() => {
    getSwipeUp(!swipeUp);
  }, [swipeUp]);

  useEffect(() => {
    width > 1024 ? setShowNavBar(true) : setShowNavBar(false);
  }, [width]);

  // 성능 개선
  let diary_id = "";
  if (location.id) {
    localStorage.setItem("diary_id", location.id);
    diary_id = location.id;
  } else {
    diary_id = localStorage.getItem("diary_id") ?? "";
  }

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await getDiaryDetail(refresh_token, diary_id).then((response) => {
        setDay(response["updated_at"].split("T")[0]);
        setTitle(response["title"]);
        setContent(response["content"]);
      });
      setLoading(false);
    };
    get();
  }, [refresh_token, diary_id]);

  //성능 개선
  const getDate = (day: any) => {
    console.log("getDAte");
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return week[new Date(day).getDay()];
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setWait(true);
    }, 18);

    return () => {
      clearTimeout(timer);
    };
  }, [wait]);

  return (
    <>
      {showNavBar && <NavBar />}

      <div className={styles.container}>
        {!loading && (
          <div className={styles.wrapper}>
            <p className={styles.day}>{getDate(day)}</p>
            <p className={styles.date}>{day}</p>
            <hr />
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.content}>{content}</p>
            {wait && (
              <div
                className={swipeUp ? styles.extended : styles.commentContainer}
              >
                <FontAwesomeIcon
                  icon={swipeUp ? faChevronDown : faChevronUp}
                  className={styles.chevronUp}
                  onClick={onClick}
                />
                <h1 className={styles.commentTitle}>오늘의 코멘트</h1>
                <p className={styles.commentContent}>
                  {username}님
                  <br />
                  {/* 아침에 작성할 경우: 오늘 하루도 화이팅! */}
                  오늘 하루도 수고하셨어요! <br />
                  현재 {username}님은 [가족관계] 상황에 놓여져있고, [분노]를
                  느끼시고 있네요.
                  <br />
                  <br />
                  화가 폭발할 것 같을 때는 그 자리를 피하는 것도 좋은 방법이라고
                  생각해요
                </p>
              </div>
            )}
          </div>
        )}
        {loading && <div className={styles.loading}></div>}
        {!showNavBar && <TabBar />}
      </div>
    </>
  );
};

export default Result;
