import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Cover>
      <div className="footer">
        <div className="footerInfo">
          ©WhyDoThat 제작자 : 정근영, 김태훈, 나두원<br></br>
          Email : whydothat.studio@gmail.com
        </div>
      </div>
    </Cover>
  );
};

const Cover = styled.div`
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #bdc3c7;
    border-top: 1px solid black;
  }
  .footerInfo {
    display: flex;
    margin: 3rem 0;
    float: left;
  }
`;

export default Footer;
