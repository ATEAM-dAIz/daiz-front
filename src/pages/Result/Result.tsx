import { useCallback, useEffect, useState } from "react";

import styles from "./Result.module.scss";
import TabBar from "../../components/TabBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { getDiaryDetail } from "../../services/DiaryService";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavBar from "../../components/NavBar";
import { useAppSelector } from "../../store";
import { AIDetail } from "../../services/AIService";

const Result = ({ location }: { location: { [key: string]: any } }) => {
  const [loading, setLoading] = useState(false);
  const [wait, setWait] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [day, setDay] = useState("");
  const [swipeUp, getSwipeUp] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [commentObj, setCommentObj] = useState({
    situation: "",
    emotion: "",
    comment: "",
  });
  const refresh_token = useAppSelector(
    (state) => state.userReducer.refresh_token
  );
  const username = useAppSelector((state) => state.userReducer.username);
  const { width } = useWindowDimensions();

  const onClick = useCallback(() => {
    getSwipeUp(!swipeUp);
  }, [swipeUp]);

  useEffect(() => {
    width > 1024 ? setShowNavBar(true) : setShowNavBar(false);
  }, [width]);

  // 성능 개선
  let diary_id = 0;
  if (location.state) {
    localStorage.setItem("diary_id", location.state);
    diary_id = location.state;
  } else {
    diary_id = Number(localStorage.getItem("diary_id")) ?? 0;
  }

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      getDiaryDetail(refresh_token, diary_id).then(
        (response: {
          [key: number]: any;
          id: number;
          title: string;
          content: string;
          updated_at: string;
        }) => {
          setDay(response["updated_at"].split("T")[0]);
          setTitle(response["title"]);
          setContent(response["content"]);
        }
      );
      setLoading(false);
    };
    get();
  }, [refresh_token, diary_id]);

  useEffect(() => {
    const get = async () => {
      AIDetail(refresh_token, diary_id).then((response) => {
        console.log(response);
        setCommentObj({
          situation: response.situation,
          emotion: response.emotion,
          comment: response.comment,
        });
      });
    };
    get();
  }, [refresh_token, diary_id]);
  //성능 개선
  const getDate = (day: any) => {
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
                  {username}님, 반가워요! <br />
                  현재 {username}님은 {commentObj.situation} 상황에 놓여져있고,{" "}
                  {commentObj.emotion} 느끼시고 있네요.
                  <br />
                  <br />
                  {commentObj.comment}
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
