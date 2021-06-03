import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};

    @import url(http://fonts.googleapis.com/earlyaccess/nanumgothiccoding.css);

  
    .App{
        height:auto;
        box-sizing:border-box;
        font-family: 'Nanum Gothic', sans-serif;

    }
    body {
        overflow:auto;
        height: 100%;
    }
    div{
        width:100%;
    }
    h1 {
    font-size: 35px;
    font-weight: bolder;

  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 40px;
    }
  }

@media only screen and (max-width: 768px){
  h1{
    font-size: 15px;
  }
}

    h2 {
    font-weight: bold;
    margin: 0.5rem 0;
  }
`;

export default GlobalStyle;
