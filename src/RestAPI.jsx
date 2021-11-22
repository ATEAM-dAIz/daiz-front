import axios from "axios";
import React, { useState } from "react";
import "./style.css";

const RestAPI = () => {
  const [text, setText] = useState([]);
  return (
    <div>
      <h1>REST API 연습</h1>
      <button
        onClick={() => {
          axios
            .post("", { title: "제목", content: "내용" })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        POST
      </button>
      <button
        onClick={() => {
          axios
            .get("", { title: "제목", content: "내용" })
            .then((response) => {
              setText([...response.data]);
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        GET
      </button>
      {text.map((e) => (
        <div>
          {" "}
          <div className="list">
            <span>
              {e.id}번, {e.title}, {e.content}, {e.update_at}
            </span>
            <button
              className="btn-delete"
              onClick={() => {
                axios.delete(`http://127.0.0.1:8000/review/${e.id}`);
                setText(text.filter((text) => text.id !== e.id));
              }}
            >
              DELETE
            </button>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestAPI;
