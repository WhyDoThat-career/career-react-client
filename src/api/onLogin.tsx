import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

axios.defaults.baseURL = "https://www.abc.com";
axios.defaults.withCredentials = true;

export interface UserRepo {
  email: string;
  password: string;
}

export function onLogin({ email, password }: UserRepo) {
  const data = {
    email,
    password,
  };
  axios
    .post("/login", data)
    .then((response) => {
      const { accessToken } = response.data;

      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    })
    .catch((error) => {});
}
