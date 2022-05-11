import axios from "axios";

export const requestSignup = async (
  email: string,
  name: string,
  pw: string,
  rePw: string
) => {
  return await axios
    .post(`/api/signup/`, {
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

export const requestLogin = async (email: string, pw: string) => {
  return axios
    .post(
      `/api/login/`,
      {
        email: email,
        password: pw,
      },
      { withCredentials: true }
    )
    .then((response) => {
      console.log(response);
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

export const requestAccessToken = async (refresh_token: string) => {
  return axios
    .post(`/api/token/refresh/`, {
      refresh: refresh_token,
    })
    .then((response) => {
      return response.data.access;
    })
    .catch((e) => {
      console.log(e.response);
      console.log(e.response.data);
    });
};

export const checkAccessToken = async (refresh_token: string) => {
  if (axios.defaults.headers.common["Authorization"] === undefined) {
    return requestAccessToken(refresh_token).then((response) => {
      return response;
    });
  } else {
    return axios.defaults.headers.common["Authorization"].split(" ")[1];
  }
};

export const resetPassword = async (email: string) => {
  const body = JSON.stringify({ email });
  return axios
    .post(`/api/password/reset/`, body, {
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

export const resetPasswordConfirm = async (
  newPw: string,
  reNewPw: string,
  uid: any,
  token: any
) => {
  const body = JSON.stringify({
    new_password1: newPw,
    new_password2: reNewPw,
    uid,
    token,
  });
  return axios
    .post(`/api/password/reset/confirm/`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      alert("새 비밀번호로 로그인 해주세요.");
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
    });
};

export const changePassword = async (
  newPw: string,
  reNewPw: string,
  refresh_token: string
) => {
  if (newPw !== reNewPw) alert("비밀번호가 일치하지 않습니다.");
  else {
    const access_token = checkAccessToken(refresh_token).then((response) => {
      return response;
    });
    const body = {
      new_password1: newPw,
      new_password2: reNewPw,
    };

    return axios
      .post(`/api/password/change/`, body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(() => {
        alert("비밀번호가 변경되었습니다.");
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  }
};
