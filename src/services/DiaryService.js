import axios from "axios";
import { serverURL } from "./ServerConst";

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
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0NjQ3MTI4LCJpYXQiOjE2NDQ2Mzk5MjgsImp0aSI6ImU3ZWJhODI0YjU4ZjRiYjdhZGZkZTM0ZTQwZGNkN2UxIiwidXNlcl9pZCI6Im1uaWppc3VAcHVreW9uZy5hYy5rciJ9.vYnSlJBrs5g3MBP82VnUT6F9jS750xCmYKHvMbF1Gc4";
export const getDiary = async () => {
  return await axios
    .get(`${serverURL}/diary/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
      return "예기치 못한 에러가 발생했습니다.";
    });
};
