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
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ0NTE0OTYxLCJpYXQiOjE2NDQ1MDc3NjEsImp0aSI6IjAyYjFkYTk4ZjJmODQ3YTFhYTE2NDJjZTUwYmQ3MTljIiwidXNlcl9pZCI6ImRhaXoyQGdtYWlsLmNvbSJ9.G7-B-V71g4w5eOIeNd3jtuXzpvOYultR11IgNhb-mXs";
export const getDiary = async (idx) => {
  return await axios
    .get(`${serverURL}/diary/${idx}`, {
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
