import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  return (
    <Cover>
      <div className="inner">
        <div className="footer-create">제작자: 정근영, 김태훈, 나두원</div>
        <div className="footer-email">Email: whydothat.studio@gmail.com</div>
        <div className="footer-copyright">
          Copyrightⓒ 2021. WhyDoThat. All rights reserved.
        </div>
      </div>
    </Cover>
  );
};

const Cover = styled.footer`
  margin-top : auto;
  border-top: 1px solid #e4e4e4;
  background-color: #f8f9fa;

  .footer-create {
    font-weight: bold;
    color: #545e6f;
    margin: 0.3rem 0.5rem;
  }
  .footer-email {
    font-weight: bold;
    color: #545e6f;
    margin: 0 0.5rem;
  }
  .footer-copyright {
    font-size: 0.8rem;
    color: #545e6f;
    margin: 1rem 0.5rem;
  }
`;
