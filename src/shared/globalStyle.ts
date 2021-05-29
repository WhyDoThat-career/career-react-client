import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    @import url(http://fonts.googleapis.com/earlyaccess/nanumgothiccoding.css);

  
    .App{
        width:100%;
        height:100vh;
        box-sizing:border-box;
        font-family: 'Nanum Gothic', sans-serif;

    }
    body {
        overflow:auto;
    }
    div{
        width:100%;
    }
      h1 {
    font-size: 35px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 40px;
      font-weight: bolder;
    }
  }
    h2 {
    font-weight: bold;
    margin: 0.5rem 0;
  }
`;

export default GlobalStyle;
