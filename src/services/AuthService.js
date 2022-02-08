import axios from "axios";
import { Cookies } from "react-cookie";
import { serverURL } from "./ServerConst";

export const requestSignup = async (email, name, pw, rePw) => {
  await axios
    .post(
      `${serverURL}/signup/`,
      {
        email: email,
        name: name,
        password1: pw,
        password2: rePw,
      },
      { withCredentials: true }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e.response.data);
      if (Object.keys(e.response.data).includes("email")) {
        return "중복된 이메일이 존재합니다.";
      } else {
        console.error(e);
        return "예기치 못한 에러가 발생했습니다.";
      }
    });
};

export const requestLogin = async (email, pw) => {
  return await axios
    .post(
      `${serverURL}/login/`,
      {
        email: email,
        password: pw,
      },
      { withCredentials: true }
    )
    .then((response) => response.data)
    .catch((e) => {
      console.log(e.response.data);
      return "이메일 혹은 비밀번호를 확인하세요.";
    });
};

export const postDiary = async (title, content) => {
  const token = new Cookies().get("daiz-auth");
  await axios({
    url: `${serverURL}/diary/`,
    headers: { Authorization: token },
    data: {
      title: title,
      content: content,
    },
  })
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
      return "예기치 못한 에러가 발생했습니다.";
    });
};
