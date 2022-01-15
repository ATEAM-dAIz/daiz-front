import React, { useState } from "react";

import styles from "./Writing.module.scss";
import Navigation from "./../components/Navigation";

const Writing = ({ history }) => {
  const [modal, setModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {modal && <div className={styles.dimmer}></div>}
      <div className={styles.container}>
        <h1>오늘 하루를 기록해보세요.</h1>
        <form onSubmit={onSubmit}>
          <input
            name="title"
            type="text"
            placeholder="제목"
            // required
            className="input-writing--title"
          />
          <hr />
          <div className={styles.wrapper}>
            <h2>오늘 무슨 일이 있었나요?</h2>
            <input
              name="title"
              type="text"
              placeholder="내용"
              // required
              className="input-writing"
            />
            <h2>그럼 OO님의 기분은 어떠한가요?</h2>
            <input
              name="title"
              type="text"
              placeholder="내용"
              // required
              className="input-writing"
            />
            <h2>그럼 OO님의 기분은 어떠한가요?</h2>
            <input
              name="title"
              type="text"
              placeholder="내용"
              // required
              className="input-writing"
            />
            <h2>그럼 OO님의 기분은 어떠한가요?</h2>
            <input
              name="title"
              type="text"
              placeholder="내용"
              // required
              className="input-writing"
            />
            <h2>그럼 OO님의 기분은 어떠한가요?</h2>
            <input
              name="title"
              type="text"
              placeholder="내용"
              // required
              className="input-writing"
            />
          </div>

          <button className="btn-writing" onClick={() => setModal(true)}>
            작성완료
          </button>
        </form>
      </div>
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
              onClick={() => history.push("/analysis")}
            >
              확인
            </button>
          </div>
        </div>
      )}

      <Navigation />
    </>
  );
};

export default Writing;
