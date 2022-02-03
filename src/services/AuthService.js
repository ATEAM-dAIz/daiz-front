import axios from "axios";
import { serverURL } from "./ServerConst";

export async function requestSignup(email, name, pw, rePw) {
  try {
    let response = await axios.post(
      `${serverURL}/signup/`,

      {
        email: email,
        name: name,
        password1: pw,
        password2: rePw,
      }
    );
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    if (Object.keys(e.response.data).includes("email")) {
      return "중복된 이메일이 존재합니다.";
    } else {
      console.error(e);
      return "예기치 못한 에러가 발생했습니다.";
    }
  }
}

export async function requestLogin(id, password) {
  try {
    let response = await axios.post(
      `${serverURL}/login/`,

      {
        email: id,
        password: password,
      }
    );
    // response.data.password = "";
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return "이메일 혹은 비밀번호를 확인하세요.";
  }
}
