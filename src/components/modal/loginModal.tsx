import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { PrimeInput } from "components/input";
import { PrimaryBtn } from "components/button";
import {
  postCheckemail,
  postCheckloginpassword,
  getGoogleLogin,
  getGithubLogin,
} from "api/userRepo";
import { RegisterModal } from "components/modal/registerModal";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function LoginModal(props: any) {
  const history = useHistory();
  const [checkEmail, setChekcEmail] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const handleLogin = (data: { email: string; password: string }) => {
    (async () => {
      const checkLogin = await postCheckloginpassword(
        data.email,
        data.password,
      );

      console.log("====================================");
      console.log(checkLogin);
      console.log("====================================");

      if (checkLogin === true) {
        window.location.reload();
        console.log("replace");
      }
    })();
  };

  const handleEmailCheck = (e: any) => {
    (async () => {
      const { value, name } = e.target;
      const answer = await postCheckemail(value);

      if (answer === "Exist") {
        setChekcEmail(true);
      } else {
        setChekcEmail(false);
      }
    })();
  };

  return (
    <Modal {...props} isOpen={props.show} toggle={props.onHide} centered>
      <Cover>
        <Header>
          <button onClick={props.onHide}>
            <i className="fas fa-times"></i>
          </button>
        </Header>
        <ModalBody>
          <section>
            <Text>
              <img src="./static/img/wdticon.png" alt="WhyDoThat logo"></img>
              <div>Why Do That!</div>
              <div>지금 채용공고를 확인하세요!</div>
            </Text>
            <form onSubmit={handleSubmit(handleLogin)}>
              <PrimeInput
                type="email"
                label="email"
                id="email"
                wd="15vw"
                onChange={handleEmailCheck}
                register={{ ...register("email", { required: true }) }}
              />
              {checkEmail ? null : <div>없는 이메일 입니다</div>}
              <PrimeInput
                type="password"
                label="pw"
                id="pw"
                wd="15vw"
                register={{ ...register("password", { required: true }) }}
              />

              <PrimaryBtn label="로그인" type="submit" disabled={!checkEmail} />
            </form>
            <PrimaryBtn
              label="회원가입"
              type="button"
              onClick={() => setModalShow(true)}
            />
            <RegisterModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <div className="hr-sect">or</div>
            <SocialBtn>
              <button
                className="googleBtn"
                onClick={(e: any) => {
                  e.preventDefault();
                  window.location.href = `${process.env.REACT_APP_API_URL}/login/google`;
                }}
              >
                <img
                  src="http://whydothat.duckdns.org/static/img/login/google.png"
                  alt="google"
                />{" "}
                <div className="google">Google 로그인</div>
              </button>
              <button
                className="githubBtn"
                onClick={(e: any) => {
                  e.preventDefault();
                  window.location.href = "/api/login/github";
                }}
              >
                <img
                  src="http://whydothat.duckdns.org/static/img/login/github.png"
                  alt="github"
                />{" "}
                <div className="github">Github 로그인</div>
              </button>
            </SocialBtn>
          </section>
        </ModalBody>
      </Cover>
    </Modal>
  );
}

const Cover = styled.div`
  height: 600px;
  .hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 0.35);
    font-size: 12px;
    margin: 8px 0px;
  }
  .hr-sect::before,
  .hr-sect::after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background-color: transparent;
    font-size: 1.2rem;
    border: none;
    outline: 0;
    margin: 0 0 10px;
    i {
      font-size: 1.5rem;
    }
  }
`;

const Text = styled.div`
  img {
    height: 60px;
    width: auto;
  }
`;

const Content = styled.div`
  height: 500px;
  display: flex;
  text-align: center;
`;

const SocialBtn = styled.div`
  button {
    display: flex;
    width: 152px;
    height: 40px;
    background-color: transparent;
    margin: 0 auto;
    border: none;
    border-radius: 5px;
    align-items: center;
    border: 0.1rem solid #e4e4e4;
  }

  .googleBtn {
    background-color: #fff;
  }
  .githubBtn {
    background-color: #000;
  }
  img {
    width: 30px;
    height: auto;
    padding: 0 5px 0 0;
  }
  div {
    width: 100%auto;
    height: 100%auto;
    /* box-sizing: border-box; */
  }
  .google {
    color: #000;
    border-left: 0.1rem solid #e4e4e4;
  }
  .github {
    color: #fff;
    border-left: 0.1rem solid #fff;
  }
`;
