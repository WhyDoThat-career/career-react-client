import React from 'react';
import styled from 'styled-components';
import GoogleLogo from 'assets/g-normal.png';

import { PrimaryBtn } from 'components/button';
import { PrimeInput } from 'components/input';

function LoginContainter() {
  return (
    <Cover>
      <Title>로그인</Title>
      <PrimeInput label="email" id="email" />
      <PrimeInput label="pw" id="pw" />
      <PrimaryBtn label="로그인" onClick={() => console.log('무야호')} />

      <GoogleBtn>
        <img
          className="img"
          src={GoogleLogo}
          alt="googlelogo"
          width={36}
          height={36}
        />

        <p>구글 계정으로 로그인</p>
      </GoogleBtn>
    </Cover>
  );
}

const Cover = styled.article`
  display: flex;
  width: 50vw;
  height: 60vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  gap: 1rem;
  padding: 2rem;
`;

const Title = styled.h1`
  font-weight: bolder;
  font-size: 32px;
`;

const GoogleBtn = styled.button`
  display: flex;
  width: 200px;
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
