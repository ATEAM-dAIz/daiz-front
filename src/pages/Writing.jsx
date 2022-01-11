import React from "react";

import styles from "./Writing.module.scss";
import Navigation from "./../components/Navigation";

const Writing = () => {
  return (
    <div className={styles.container}>
      <h1>오늘 하루를 기록해보세요.</h1>
      <form>
        <input
          name="title"
          type="text"
          placeholder="제목"
          required
          className="input-writing--title"
        />
        <hr />
        <div className={styles.wrapper}>
          <h2>오늘 무슨 일이 있었나요?</h2>
          <input
            name="title"
            type="text"
            placeholder="내용"
            required
            className="input-writing"
          />
          <h2>그럼 OO님의 기분은 어떠한가요?</h2>
          <input
            name="title"
            type="text"
            placeholder="내용"
            required
            className="input-writing"
          />
          <h2>그럼 OO님의 기분은 어떠한가요?</h2>
          <input
            name="title"
            type="text"
            placeholder="내용"
            required
            className="input-writing"
          />
          <h2>그럼 OO님의 기분은 어떠한가요?</h2>
          <input
            name="title"
            type="text"
            placeholder="내용"
            required
            className="input-writing"
          />
          <h2>그럼 OO님의 기분은 어떠한가요?</h2>
          <input
            name="title"
            type="text"
            placeholder="내용"
            required
            className="input-writing"
          />
        </div>

        <button className="btn-writing">작성완료</button>
      </form>
      <Navigation />
    </div>
  );
};

export default Writing;
