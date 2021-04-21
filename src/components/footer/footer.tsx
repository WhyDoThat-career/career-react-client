import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Cover>
      <footer>
        <div className="footer-create">제작자: 정근영, 김태훈, 나두원</div>
        <div className="footer-email">Email: whydothat.studio@gmail.com</div>
        <div className="footer-copyright">
          Copyrightⓒ 2021. WhyDoThat. All rights reserved.
        </div>
      </footer>
    </Cover>
  );
};

const Cover = styled.div`
  footer {
    border-top: 1px solid #e4e4e4;
    background-color: #f8f9fa;
    padding: 1rem 0;
    margin: 1rem 0;
  }
  .footer-create {
    font-weight: bold;
    color: #545e6f;
    margin: 0.3rem 0.5rem;
  }
  .footer-email {
    color: #545e6f;
    margin: 0 0.5rem;
  }
  .footer-copyright {
    color: #545e6f;
    margin: 1rem 0.5rem;
  }
`;

export default Footer;
