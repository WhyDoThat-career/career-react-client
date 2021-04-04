import { AxiosInstance } from './_apiInstance';

import { AxiosError, AxiosResponse } from 'axios';

export const getSector = async () => {
  return AxiosInstance.get('/getsector')
    .then((answer) => {
      return answer.data;
    })
    .catch((err) => {
      throw err;
    });
};
