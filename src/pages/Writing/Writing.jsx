import React, { useCallback, useEffect, useState } from "react";

import styles from "./Writing.module.scss";
import TabBar from "../../components/TabBar";
import { postDiary } from "../../services/DiaryService";
import { useDispatch, useSelector } from "react-redux";
import { clickWriting } from "../../store/modules/tab_bar";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import NavBar from "../../components/NavBar";

const Writing = ({ history }) => {
  const dispatch = useDispatch();
  const [showNavBar, setShowNavBar] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    width > 1024 ? setShowNavBar(true) : setShowNavBar(false);
  }, [width]);

  useEffect(() => dispatch(clickWriting("true")), [dispatch]);

  const refresh_token = useSelector((state) => state.userReducer.refresh_token);

  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [existingContent, setExistingContent] = useState(false);

  const changeInput = useCallback((e) => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "content":
        value.length === 0
          ? setExistingContent(false)
          : setExistingContent(true);
        setContent(value);
        break;

      default:
    }
  }, []);

  return (
    <>
      {showNavBar && <NavBar />}
      {modal && <div className={styles.dimmer}></div>}
      <div className={styles.container}>
        <h1>오늘 하루를 기록해보세요.</h1>
        <form onSubmit={(e) => e.preventDefault()} className={styles}>
          <input
            name="title"
            type="text"
            placeholder="제목"
            required
            className="input-writing--title"
            onChange={changeInput}
          />
          <hr />
          <div className={styles.wrapper}>
            <h2>오늘 무슨 일이 있었나요?</h2>
            <input
              name="content"
              type="text"
              placeholder="내용"
              required
              className="input-writing"
              onChange={changeInput}
            />
          </div>
          <button
            className="btn-writing"
            onClick={() => existingContent && setModal(true)}
          >
            작성완료
          </button>
          {modal && (
            <div className={styles.modal}>
              <p>일기가 분석된 후에는 수정할 수 없어요.</p>
              <p>다 썼는지 확인해주세요.</p>
              <div className={styles.btnContainer}>
                <button
                  className={styles.btnReturn}
                  onClick={() => setModal(false)}
                >
                  돌아가기
                </button>
                <button
                  className={styles.btnConfirm}
                  onClick={() => {
                    postDiary(refresh_token, title, content);
                    history.push("/analysis");
                  }}
                >
                  확인
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {!showNavBar && <TabBar />}
    </>
  );
};

export default Writing;
