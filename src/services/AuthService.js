import axios from "axios";
import { serverURL } from "./ServerConst";

export const requestSignup = async (email, name, pw, rePw) => {
  return await axios
    .post(`${serverURL}/signup/`, {
      email: email,
      name: name,
      password1: pw,
      password2: rePw,
    })
    .catch((e) => {
      alert(e.response.data.email);
      return "error";
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

export const requestAccessToken = async (refresh_token) => {
  return await axios
    .post(`${serverURL}/token/refresh/`, {
      refresh: refresh_token,
    })
    .then((response) => {
      return response.data.access;
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};

export const checkAccessToken = async (refresh_token) => {
  if (axios.defaults.headers.common["Authorization"] === undefined) {
    return await requestAccessToken(refresh_token).then((response) => {
      return response;
    });
  } else {
    return axios.defaults.headers.common["Authorization"].split(" ")[1];
  }
};

export const resetPassword = async (email) => {
  const body = JSON.stringify({ email });
  return await axios
    .post(`${serverURL}/password/reset/`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};

export const resetPasswordConfirm = async (newPw, reNewPw, uid, token) => {
  const body = JSON.stringify({
    new_password1: newPw,
    new_password2: reNewPw,
    uid,
    token,
  });
  return await axios
    .post(`${serverURL}/password/reset/confirm/`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("변경 완료");
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};
