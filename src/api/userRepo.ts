import axios from "axios";
import { AxiosInstance } from "./_apiInstance";

const headers = {
  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  Accept: "*/*",
};

export const postCheckemail = async (email: string) => {
  return AxiosInstance.post("/checkemail", `email= ${email}`, { headers });
};

export const postCheckloginpassword = async (
  email: string,
  password: string,
) => {
  return AxiosInstance.post(
    "/checkloginpassword",
    `email=${email}&password=${password}`,
    { headers },
  );
};
