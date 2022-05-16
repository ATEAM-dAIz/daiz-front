import axios from "axios";
import { checkAccessToken } from "./AuthService";

export const AIDetail = async (refresh_token: string, id: number) => {
  const access_token: string = await checkAccessToken(refresh_token);
  return axios
    .get(`/api/diary/${id}/ai/`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((response) => {
      return response.data[0];
    })
    .catch((e) => {
      console.log(e.response.data);
      alert("예기치 못한 에러가 발생했습니다.");
    });
};
