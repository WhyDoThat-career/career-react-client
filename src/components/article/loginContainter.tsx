import React from 'react';
import styled from 'styled-components';

import { PrimaryBtn } from 'components/button';
import { PrimeInput } from 'components/input';

function LoginContainter() {
  return (
    <Cover>
      <Title>로그인</Title>
      <PrimeInput label="email" id="email" />
      <PrimeInput label="pw" id="pw" />
      <PrimaryBtn label="로그인" onClick={() => console.log('무야호')} />
    </Cover>
  );
}

const Cover = styled.article`
  display: flex;
  width: 50vw;
  height: 50vh;
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

export default LoginContainter;
