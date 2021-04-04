import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Cover>
      <p>©WhyDoThat</p>
      <p>제작자 : 정근영, 김태훈, 나두원</p>
      <p>Email : whydothat.studio@gmail.com</p>
    </Cover>
  );
};

const Cover = styled.div`
  display: flex;
  background-color: #141d3d;
  height: 12vh;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Footer;
