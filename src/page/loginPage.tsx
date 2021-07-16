import LoginContainter from 'components/article/loginContainter';
import React from 'react';
import styled from 'styled-components';

function LoginPage() {
  return (
    <Cover>
      <LoginContainter />
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #4d72de;
`;

export default LoginPage;
