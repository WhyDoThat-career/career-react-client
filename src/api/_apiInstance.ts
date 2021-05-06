import axios, { AxiosRequestConfig, AxiosError } from "axios";

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

AxiosInstance.interceptors.request.use(
  (response) => {
    // 요청 바로 직전
    // axios 설정값에 대해 작성합니다.
    // localStorage.getItem('token')
    //   ? (response.headers['Authorization'] = `jwt ${localStorage.getItem(
    //       'token',
    //     )}`)
    //   : null;
    return response;
  },
  (error) => {
    // 요청 에러 처리를 작성합니다.
    return Promise.reject(error);
  },
);

AxiosInstance.interceptors.response.use(
  (response) => {
    /*
        http status가 200인 경우
        응답 바로 직전에 대해 작성합니다. 
        .then() 으로 이어집니다.
    */

    return response;
  },

  (error) => {
    if (error.response) {
      if (error.response.data.message === "Signature has expired.") {
        alert("로그인 시간이 만료되었습니다. 다시 로그인 해주세요");
        localStorage.clear();
        return (window.location.href = "/");
      }
      console.log(error.response);

      return Promise.reject(error);
    } else {
      alert(`예기치 못한 에러 ${error.message}`);
      console.log(error);

      return Promise.reject(error);
    }
    /*
        http status가 200이 아닌 경우
        응답 에러 처리를 작성합니다.
        .catch() 으로 이어집니다.    
    */
  },
);
