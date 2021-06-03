import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PrimaryBtn } from 'components/button';
import { Col, Container, Row } from 'reactstrap';
// import { LoginModal } from "components/modal/loginModal";

function MainPage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Cover>
      <Content fluid>
        <div className="wdt">
          <h3>WHY</h3>
          <h3>DO</h3>
          <h3>THAT</h3>
        </div>

        <div className="wdt ">
          <TestTxt>더이상</TestTxt>
          <TestTxt>찾기 싫다면</TestTxt>
          <TestTxt>모은거 보세요</TestTxt>
          <div>Thanks To</div>

          <Row className="img-Container">
            <Col xs="2">
              <img
                src="http://api.whydothat.net/static/img/icon/kakao.png"
                alt="platform logo"
              />
            </Col>
            <Col xs="2">
              <img
                src="http://api.whydothat.net/static/img/icon/naver.png"
                alt="platform logo"
              />
            </Col>
            <Col xs="2">
              <img
                src="http://api.whydothat.net/static/img/icon/programmers.png"
                alt="platform logo"
              />
            </Col>
            <Col xs="2">
              <img
                src="http://api.whydothat.net/static/img/icon/wanted.png"
                alt="platform logo"
              />
            </Col>
            <Col xs="2">
              <img
                src="http://api.whydothat.net/static/img/icon/roketpunch.png"
                alt="platform logo"
              />
            </Col>
            <Col xs="2">
              <img
                src="http://api.whydothat.net/static/img/icon/wdticon.png"
                alt="platform logo"
              />
            </Col>
          </Row>
        </div>
      </Content>

      {/* <button onClick={() => setModalShow(true)}>{"시작하기 ->"}</button>
      <LoginModal show={modalShow} onHide={() => setModalShow(false)} /> */}
    </Cover>
  );
}

const Cover = styled.article`
  display: flex;
  height: 100%;
  min-height:81vh;
  flex-direction: column;

  @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  /* position: absolute; */
  width: 100vw;
  position: relative;
  /* height: 100vh; */
  ::after {
    background-image: url('http://api.whydothat.net/static/img/background.jpg');
    /* background-color: rgba(255, 255, 255, 0.5);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    opacity: 0.5; */
    /* top: 8vh; */
    left: 0;
    position: absolute;
    background-size: cover;
    opacity: 0.6 !important;
    filter: alpha(opacity=50);
    z-index: -1;
    content: '';
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

    font-family: 'Rubik', sans-serif;
    font-size: 4.5vw;
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
    display: flex;

    flex-direction: column;
    margin: 0;

    &--row {
      flex-direction: row;
    }
  }

  div {
    /* margin: 0 0 0 35vw; */
    font-family: 'Black Han Sans', sans-serif;
    text-shadow: rgb(255 0 0) 1.0779px -0.86493px 0px,
      rgb(0 255 255) -1.0779px 0.86493px 0px;
    color: white;
    font-size: 3vw;
  }

  img {
    width: 4vw;
    height: auto;
    margin: 0 0.2vw 0 0;
  }

  .img-Container {
    display: flex;
    width: 100%;
    margin-left:0.2vw;
    div {
      width: fit-content;
      height: fit-content;
      padding: 0 !important;
    }
  }

  button {
    margin: 10px 0 20px 35vw;
    width: 300px;
    height: 50px;
    font-size: 1.5rem;
    background-color: #ffa502;
    color: #fff;
    font-family: 'Black Han Sans', sans-serif;
    border: none;
    border-radius: 20px;
    box-shadow: 5px 5px 5px #57606f;
  }
`;

const Content = styled(Container)`
  display: flex;
  width: 50vw;
  margin-top: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TestTxt = styled.h4`
  width: fit-content;
  /* margin: 0 0 0 35vw; */
  font-family: 'Black Han Sans', sans-serif !important;
  text-shadow: rgb(0 0 0 / 60%) 0px 5.25px 39.375px;
  font-size: 6.5vw !important;
  color: white;
`;

export default MainPage;
