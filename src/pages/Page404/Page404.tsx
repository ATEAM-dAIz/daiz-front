import { useHistory } from "react-router";
import styles from "./Page404.module.scss";

const Page404 = () => {
  const history = useHistory();
  const onClick = () => {
    history.goBack();
  };
  return (
    <div className={styles.container}>
      <p>페이지가 존재하지 않습니다.</p>
      <span>
        링크를 잘못 입력하셨거나 페이지가 삭제, 이동 되었을 수 있습니다.
      </span>
      <button onClick={onClick}>뒤로가기</button>
    </div>
  );
};

export default Page404;
