import { AxiosInstance } from './_apiInstance';

import { AxiosError, AxiosResponse } from 'axios';

export const getCompanyList = async (type: string) => {
  const answer = await AxiosInstance.get(`/getdata/${type}`).catch((err) => {
    throw err;
  });

  return answer.data;
};

export const getSector = async () => {
  const answer = await AxiosInstance.get('/getsector').catch((err) => {
    throw err;
  });

  return answer.data;
};
