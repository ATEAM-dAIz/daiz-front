import React, { useState } from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { requestSignup } from "../../services/AuthService";
import styles from "./Signup.module.scss";

const Signup = ({ history }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [rePw, setRePw] = useState("");
  const [name, setName] = useState("");

  const changeInput = (e) => {
    const {
      target: { name, value },
    } = e;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPw(value);
        break;
      case "reEnterPassword":
        setRePw(value);
        break;
      case "name":
        setName(value);
        break;
      default:
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault(); //prevent initialization input

    if (!email.includes("@")) alert("이메일 형식을 입력하세요.");
    else if (rePw !== pw) alert("비밀번호를 확인하세요.");
    else {
      const response = await requestSignup(email, name, pw, rePw);
      response !== "error" && history.push("/main");
    }
  };

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <form className={styles.column} onSubmit={onSubmit} noValidate>
        <input
          value={email}
          name="email"
          type="email"
          placeholder="이메일"
          className="input-account"
          onChange={changeInput}
          required
        />
        <input
          value={pw}
          name="password"
          type="password"
          placeholder="비밀번호"
          className="input-account"
          onChange={changeInput}
          required
        />
        <input
          value={rePw}
          name="reEnterPassword"
          type="password"
          placeholder="비밀번호 확인"
          className="input-account"
          onChange={changeInput}
          required
        />
        <input
          value={name}
          name="name"
          type="text"
          placeholder="닉네임"
          className="input-account"
          onChange={changeInput}
          required
        />
        <button className={`btn-main ${styles.btn}`}>회원가입</button>
      </form>

      <div className={styles.linkContainer}>
        <p className={styles.link} onClick={() => history.push("/")}>
          이미 가입하셨나요?
        </p>
      </div>
    </div>
  );
};

export default Signup;
