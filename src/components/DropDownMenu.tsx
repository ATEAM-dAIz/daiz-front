import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../store";
import { logout } from "../store/modules/info";
import styles from "./DropDownMenu.module.scss";

const DropDownMenu = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className={styles.container}>
      <ul onClick={onClick}>마이페이지</ul>
      <nav
        ref={dropdownRef}
        className={`${styles.menu} ${
          isActive ? styles.active : styles.inactive
        }`}
      >
        <ul>
          <li onClick={() => history.push("/mypage")}>일기 목록</li>
          <li onClick={() => history.push("/change_password")}>
            비밀번호 변경
          </li>
          <li onClick={() => dispatch(logout())}>로그아웃</li>
        </ul>
      </nav>
    </div>
  );
};

export default DropDownMenu;
