import axios from "axios";
import { serverURL } from "./ServerConst";
import { requestAccessToken } from "./AuthService";

export const postDiary = async (title, content) => {
  await axios
    .post(
      `${serverURL}/diary/`,
      {
        title: title,
        content: content,
      },
      { withCredentials: true }
    )
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
      return "예기치 못한 에러가 발생했습니다.";
    });
};

export const getDiary = async (refresh_token) => {
  let access_token = "";
  if (axios.defaults.headers.common["Authorization"] === undefined) {
    access_token = await requestAccessToken(refresh_token).then((response) => {
      return response;
    });
  }

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
      return "예기치 못한 에러가 발생했습니다.";
    });
};
