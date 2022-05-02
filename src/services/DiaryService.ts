import axios from "axios";
import { checkAccessToken } from "./AuthService";

export const postDiary = async (
  refresh_token: string,
  title: string,
  content: string
) => {
  const access_token: string = await checkAccessToken(refresh_token);
  try {
    axios.post(
      `diary/`,
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
      ] = `Bearer ${access_token}`) as any
    );
  } catch (error: any) {
    console.log(error.response);
    alert("예기치 못한 에러가 발생했습니다.");
  }
};

export const getDiary = async (refresh_token: string) => {
  const access_token: string = await checkAccessToken(refresh_token);
  return axios
    .get(`diary/`, {
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

export const getDiaryDetail = async (refresh_token: string, id: string) => {
  const access_token: string = await checkAccessToken(refresh_token);
  return axios
    .get(`diary/${id}`, {
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
