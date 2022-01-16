import React, { useState } from "react";

import styles from "./Result.module.scss";
import Navigation from "./../components/Navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Result = () => {
  const [swipeUp, getSwipeUp] = useState(false);
  return (
    <div className={styles.container}>
      <p className={styles.day}>SUN</p>
      <p className={styles.date}>2021.11.07</p>
      <hr />
      <h1 className={styles.title}>무제</h1>
      <p className={styles.content}>
        찾아다녀도, 풀이 그것은 부패뿐이다. 인류의 밥을 목숨이 인생을 것이다.
        바로 못할 청춘에서만 하는 인간에 더운지라 품고 예수는 고행을 교향악이다.
        불어 봄날의 보배를 노래하며 사막이다. 밥을 밝은 같은 가슴에 때까지 안고,
        우는 칼이다. 있는 무엇을 생명을 품었기 그리하였는가? 밝은 영원히 예수는
        웅대한 때문이다. 대한 이것을 뜨고, 원질이 그들은 예가 사막이다. 남는 뭇
        구하지 눈이 이것이다. 끓는 인생에 피에 황금시대를 있는 싶이 그들의
        있는가? 피고 든 얼음 갑 우리 구하지 뜨고, 위하여 부패뿐이다. 황금시대의
        이상의 끓는 눈이 아니다. 예수는 열락의 실로 황금시대의 속에서 가는 풀이
        그리하였는가? 커다란 인도하겠다는 구하기 인간의 뿐이다. 그들의 구할
        힘차게 곳으로 있을 꽃이 오직 무엇을 심장의 부패뿐이다.
      </p>
      <div className={swipeUp ? styles.extended : styles.commentContainer}>
        <FontAwesomeIcon
          icon={swipeUp ? faChevronDown : faChevronUp}
          className={styles.chevronUp}
          onClick={() => getSwipeUp(!swipeUp)}
        />
        <h1 className={styles.commentTitle}>오늘의 코멘트</h1>
        <p className={styles.commentContent}>
          OO님
          <br />
          {/* 아침에 작성할 경우: 오늘 하루도 화이팅! */}
          오늘 하루도 수고하셨어요! <br />
          현재 ㅇㅇ님은 [가족관계] 상황에 놓여져있고, [분노]를 느끼시고 있네요.
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
