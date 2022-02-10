import axios from "axios";
import { serverURL } from "./ServerConst";

export const requestSignup = async (email, name, pw, rePw) => {
  await axios
    .post(`${serverURL}/signup/`, {
      email: email,
      name: name,
      password1: pw,
      password2: rePw,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => {
      console.log(e.response.data);
      // if (Object.keys(e.response.data).includes("email")) {
      //   return "중복된 이메일이 존재합니다.";
      // }
      console.error(e);
      return "예기치 못한 에러가 발생했습니다.";
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
    .then((response) => {
      /// token이 필요한 API 요청 시 header Authorization에 token 담아서 보내기
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
      return "이메일 혹은 비밀번호를 확인하세요.";
    });
};

export const postDiary = async (title, content) => {
  await axios({
    method: "post",
    url: `${serverURL}/diary/`,
    data: {
      title: title,
      content: content,
    },
    withCredentials: true,
  })
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
      return "예기치 못한 에러가 발생했습니다.";
    });
};
