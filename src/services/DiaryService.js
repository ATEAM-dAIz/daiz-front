import axios from "axios";
import { serverURL } from "./ServerConst";
import { checkAccessToken, requestAccessToken } from "./AuthService";

export const postDiary = async (refresh_token, title, content) => {
  const access_token = await checkAccessToken(refresh_token);
  await axios
    .post(
      `${serverURL}/diary/`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        title: title,
        content: content,
      },
      (axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`)
    )
    .then((response) => response.data)
    .catch((e) => {
      console.log(e.response);
      alert("예기치 못한 에러가 발생했습니다.");
    });
};

export const getDiary = async (refresh_token) => {
  const access_token = await checkAccessToken(refresh_token);

  return await axios
    .get(`${serverURL}/diary/`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
      alert("예기치 못한 에러가 발생했습니다.");
    });
};

export const getDiaryDetail = async (refresh_token, id) => {
  const access_token = await checkAccessToken(refresh_token);
  return await axios
    .get(`${serverURL}/diary/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
      alert("예기치 못한 에러가 발생했습니다.");
    });
};
