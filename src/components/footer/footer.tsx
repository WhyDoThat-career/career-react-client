import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Cover>
      <div className="footer">
        <p>©WhyDoThat</p>
        <p>제작자 : 정근영, 김태훈, 나두원</p>
        <p>Email : whydothat.studio@gmail.com</p>
      </div>
    </Cover>
  );
};

const Cover = styled.div`
  background-color: #3498db;
`;

export default Footer;
