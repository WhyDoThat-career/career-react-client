import React, { useEffect } from 'react';
import styled from 'styled-components';
import GoogleLogo from 'assets/g-normal.png';
import { useRecoilState } from 'recoil';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Github } from '@styled-icons/boxicons-logos';

import { PrimaryBtn } from 'components/button';
import { PrimeInput } from 'components/input';
import { userState } from 'shared/store';
import { postCheckemail, postCheckloginpassword } from 'api/userRepo';

function LoginContainter() {
  const history = useHistory();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const handleLogin = (data: { email: string; password: string }) => {
    (async () => {
      const checkmail = await postCheckemail(data.email);

      const checkLogin = await postCheckloginpassword(
        data.email,
        data.password,
      );

      // console.log('====================================');
      // console.log('checkmail', checkmail, checkLogin);
      // console.log('====================================');
    })();
  };

  return (
    <Cover>
      <Title>
        Why Do That!
        <br />
        지금 채용공고를 확인하세요!
      </Title>
      <form onSubmit={handleSubmit(handleLogin)}>
        <PrimeInput
          type="email"
          label="email"
          id="email"
          wd="15vw"
          register={{ ...register('email', { required: true }) }}
        />
        {/* {errors.email && <span>This field is required</span>} */}

        <PrimeInput
          type="password"
          label="pw"
          id="pw"
          wd="15vw"
          register={{ ...register('password', { required: true }) }}
        />
        {/* {errors.password && <span>This field is required</span>} */}

        <PrimaryBtn label="로그인" type="submit" />
      </form>

      <hr></hr>

      <GoogleBtn
        onClick={() =>
          (window.location.href = `${process.env.REACT_APP_API_URL}/google_login`)
        }
      >
        <img
          className="img"
          src={GoogleLogo}
          alt="googlelogo"
          width={36}
          height={36}
        />

        <p>구글 계정으로 로그인</p>
      </GoogleBtn>

      <GitBtn
        onClick={() =>
          (window.location.href = `${process.env.REACT_APP_API}/github_login`)
        }
      >
        <Github size="30" style={{ margin: '8px' }} />
        <p>깃허브 계정으로 로그인</p>
      </GitBtn>
    </Cover>
  );
}

const Cover = styled.article`
  display: flex;
  width: 40vw;
  height: 50%;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  gap: 2rem;
  padding: 2rem;

  hr {
    width: 80%;
  }
  form {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Title = styled.h1`
  font-weight: bolder;
  font-size: 28px;
  text-align: center;
  white-space: normal;
`;

const GoogleBtn = styled.button`
  display: flex;
  width: 10vw;
  min-width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 30px;
  padding: 0 1rem;
  font-weight: bold;
  border: none;
  background-color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

const GitBtn = styled.button`
  display: flex;
  width: 10vw;
  min-width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: black;
  border-radius: 30px;
  padding: 0 1rem;
  font-weight: bold;
  border: none;
  background-color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
`;

export default LoginContainter;
