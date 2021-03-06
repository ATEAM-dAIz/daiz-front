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
import { useParams } from "react-router-dom";

const Result = () => {
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

  const { diary_id } = useParams<{ diary_id?: string }>();

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      getDiaryDetail(refresh_token, Number(diary_id)).then(
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
      AIDetail(refresh_token, Number(diary_id)).then((response) => {
        setCommentObj({
          situation: response.situation,
          emotion: response.emotion,
          comment: response.comment,
        });
      });
    };
    get();
  }, [refresh_token, diary_id]);
  //?????? ??????
  const getDate = (day: any) => {
    const week = [
      "?????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
      "?????????",
    ];
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
                <h1 className={styles.commentTitle}>????????? ?????????</h1>
                <p className={styles.commentContent}>
                  {username}???, ????????????! <br />
                  ?????? {username}?????? {commentObj.situation} ????????? ???????????????,{" "}
                  {commentObj.emotion} ???????????? ?????????.
                  <br />
                  <br />
                  {commentObj.comment}
                </p>
              </div>
            )}
          </div>
        )}
        {loading && <div className={styles.loading}></div>}
        {!showNavBar && <TabBar fullScreen={false} />}
      </div>
    </>
  );
};

export default Result;
