import React from "react";
import axios from "axios";
import { AxiosInstance } from "./_apiInstance";
import { rejects } from "assert";
import { transform } from "typescript";
import { wait } from "@testing-library/react";
import { time } from "console";

const headers = {
  "Content-type": "application/json",
};

export const postCheckemail = async (email: string) => {
  const answer = await AxiosInstance.post(
    "/check/email",
    JSON.stringify({ email: email }),
  ).catch((err) => {
    throw err;
  });
  return answer.data;
};

export const postCheckloginpassword = async (
  emails: string,
  passwords: string,
) => {
  const answer = await AxiosInstance.post(
    "/login",
    JSON.stringify({ email: emails, password: passwords }),
  ).catch((err) => {
    throw err;
  });

  return answer.data;
};

export const postRegister = async (
  email: string,
  nickname: string,
  password: string,
  confirmpassword: string,
) => {
  const answer = await AxiosInstance.post(
    "/register",
    JSON.stringify({
      email: email,
      nickname: nickname,
      password: password,
      confirmpassword: confirmpassword,
    }),
  );
  console.log("register");
};

export const getCheckUserRepo = async () => {
  const answer = await AxiosInstance.get("/getuser").catch((err) => {
    throw err;
  });

  return answer.data;
};

export const getLogout = async () => {
  await AxiosInstance.get("/logout");
  window.location.reload();
};
