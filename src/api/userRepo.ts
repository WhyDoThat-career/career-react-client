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

export const getGoogleLogin = async () => {
  await AxiosInstance.get("/login/google");
};

export const getGithubLogin = async () => {
  await AxiosInstance.get("/login/github");
};

export const postRegister = async (
  email: string,
  nickname: string,
  password: string,
  confirmpassword: string,
) => {
  await AxiosInstance.post(
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
};

export const postActiveLog = async (type: string, id: number) => {
  await AxiosInstance.post(
    "/active_log",
    JSON.stringify({ activity: type, recruit_id: id }),
  ).catch((err) => {
    throw err;
  });
};

export const getRecommend = async () => {
  const answer = await AxiosInstance.get("recommend").catch((err) => {
    throw err;
  });

  return answer.data;
};
