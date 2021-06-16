import { AxiosInstance } from "./_apiInstance";

import { AxiosError, AxiosResponse } from "axios";

export const getCompanyList = async (
  type: string,
  newbie?: string,
  page?: number,
) => {
  const answer = await AxiosInstance.get(`/getdata/${type}`, {
    params: {
      newbie,
      page,
    },
  }).catch((err) => {
    throw err;
  });

  return answer.data;
};

export const getIdData = async (type?: any) => {
  const answer = await AxiosInstance.get(`/getdata?id=${type}`).catch((err) => {
    throw err;
  });

  return answer.data;
};

export const getSector = async () => {
  const answer = await AxiosInstance.get("/getdata/sector").catch((err) => {
    throw err;
  });

  return answer.data;
};

export const getsearchData = async (
    type: string,
    page?: number,
  ) => {
  const answer = await AxiosInstance.get(`/search?term=${type}`, {
  params: {
      page,
      },
    }).catch((err) => {
      throw err;
    });

  return answer.data;
};

export const getJobPlanetData = async (type: string) => {
  const answer = await AxiosInstance.get(`/getdata/company/${type}`);

  return answer;
};
