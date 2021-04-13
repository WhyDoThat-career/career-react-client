import axios from 'axios';
import { AxiosInstance } from './_apiInstance';

export const postCheckemail = async (email: string) => {
  return AxiosInstance.post('/checkemail', { email });
};

export const postCheckloginpassword = async (
  email: string,
  password: string,
) => {
  return AxiosInstance.post('/checkloginpassword', { email, password });
};
