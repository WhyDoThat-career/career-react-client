import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PrimaryBtn } from "components/button";

function MainPage() {
  return (
    <Cover>
      <div className="wdt">
        <h3>WHY</h3>
        <h3>DO</h3>
        <h3>THAT</h3>
      </div>

      <h4>더이상</h4>
      <h4>찾기 싫다면</h4>
      <h4>모은거 보세요</h4>

      <div>Thanks To</div>
      <div className="img">
        <img
          src="http://whydothat.duckdns.org/static/img/icon/kakao.png"
          alt="platform logo"
        />
        <img
          src="http://whydothat.duckdns.org/static/img/icon/naver.png"
          alt="platform logo"
        />
        <img
          src="http://whydothat.duckdns.org/static/img/icon/programmers.png"
          alt="platform logo"
        />
        <img
          src="http://whydothat.duckdns.org/static/img/icon/wanted.png"
          alt="platform logo"
        />
        <img
          src="http://whydothat.duckdns.org/static/img/icon/roketpunch.png"
          alt="platform logo"
        />
        <img
          src="http://whydothat.duckdns.org/static/img/icon/wdticon.png"
          alt="platform logo"
        />
      </div>
    </Cover>
  );
}

const Cover = styled.article`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap");
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  /* position: absolute; */
  width: 100vw;
  height: 100vh;
  ::after {
    background-image: url("http://whydothat.duckdns.org/static/img/background.jpg");
    /* background-color: rgba(255, 255, 255, 0.5);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 0.5; */
    top: 8vh;
    left: 0;
    position: absolute;
    background-size: cover;
    opacity: 0.6 !important;
    filter: alpha(opacity=50);
    z-index: -1;
    content: "";
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  h3 {
    text-align: center;
    font-weight: 500;
    font-style: italic;
    color: rgb(0, 0, 0);
    text-decoration: none;
    text-shadow: rgb(0 255 255) 4.0779px -1.86493px 0px,
      rgb(255 0 0) -4.0779px 1.86493px 0px;

    font-family: "Rubik", sans-serif;
    font-size: 5vw;
    color: rgb(0, 0, 0);
    line-height: 0.75em;
    letter-spacing: 3px;
    /* --para-spacing: 0; */
    /* text-transform: uppercase; */
    /* --head-indent: 0;
    --numeric-list-marker: none; */
    /* list-style-type: none; */
    /* word-spacing: 100 px; */
  }
  .wdt {
    margin: 0;
    padding: 100px 0 20px 0;
  }
  h4 {
    margin: 0 0 0 30vw;
    font-family: "Black Han Sans", sans-serif;
    text-shadow: rgb(0 0 0 / 60%) 0px 5.25px 39.375px;
    font-size: 7vw;
    color: white;
  }
  div {
    margin: 0 0 0 30vw;
    font-family: "Black Han Sans", sans-serif;
    text-shadow: rgb(255 0 0) 1.0779px -0.86493px 0px,
      rgb(0 255 255) -1.0779px 0.86493px 0px;
    color: white;
    font-size: 3vw;
  }
  }
  img {
    width: 4vw;
    height: auto;
    margin: 0 0.2vw 0 0;
  }
`;

export default MainPage;
