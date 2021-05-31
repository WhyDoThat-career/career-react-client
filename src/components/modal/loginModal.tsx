import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
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
    <Cover>
      <Modal
        {...props}
        // size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Header>
          <button onClick={props.onHide}>
            <i className="fas fa-times"></i>
          </button>
        </Header>
        <Content>
          <Modal.Body>
            <section>
              <img src="./static/img/wdticon.png" alt="WhyDoThat logo"></img>
              <div>Why Do That!</div>
              <div>지금 채용공고를 확인하세요!</div>
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

                <PrimaryBtn
                  label="로그인"
                  type="submit"
                  disabled={!checkEmail}
                />
              </form>
              <button
                onClick={(e: any) => {
                  e.preventDefault();
                  window.location.href = `${process.env.REACT_APP_API_URL}/login/google`;
                }}
              >
                <img src={require("assets/g-normal.png")} alt="google" />
              </button>
              <button
                onClick={(e: any) => {
                  e.preventDefault();
                  window.location.href = "/api/login/github";
                }}
              >
                <img src={require("assets/g-normal.png")} alt="github" />
              </button>
              <PrimaryBtn
                label="회원가입"
                type="button"
                onClick={() => setModalShow(true)}
              />
              <RegisterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </section>
          </Modal.Body>
        </Content>
        {/* <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer> */}
      </Modal>
    </Cover>
  );
}

const Cover = styled.div``;

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

const Content = styled.div`
  height: 500px;
  display: flex;
  text-align: center;
`;
