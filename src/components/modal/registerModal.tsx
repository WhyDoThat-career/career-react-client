import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { PrimeInput } from "components/input";
import { PrimaryBtn } from "components/button";
import { postRegister, postCheckemail } from "api/userRepo";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function RegisterModal(props: any) {
  const [checkEmail, setCheckEmail] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{
    email: string;
    nickname: string;
    password: string;
    confirmpassword: string;
  }>();

  const handleRegister = (data: {
    email: string;
    nickname: string;
    password: string;
    confirmpassword: string;
  }) => {
    postRegister(
      data.email,
      data.nickname,
      data.password,
      data.confirmpassword,
    );

    window.location.reload();
  };

  const handle = (e: any) => {
    (async () => {
      const { value, name } = e.target;
      const answer = await postCheckemail(value);

      if (answer === "Exist") {
        setCheckEmail(false);
      } else {
        setCheckEmail(true);
      }
    })();
  };

  return (
    <Modal
      {...props}
      isOpen={props.show}
      fade={false}
      toggle={props.onHide}
      backdrop={false}
      centered
    >
      <Cover>
        <Header>
          <button onClick={props.onHide}>
            <i className="fas fa-times"></i>
          </button>
        </Header>
        <Content>
          <ModalBody>
            <section>
            <Text>
              <img src="https://whydothat.net/static/img/wdticon.png" alt="WhyDoThat logo"></img>
              <h1>WhyDoThat</h1>
              <br></br>
              <h2>지금 당장 WhyDoThat에 참여하세요!</h2>
            </Text>
            <RegisterForm>
              <form onSubmit={handleSubmit(handleRegister)}>
                <PrimeInput
                  type="email"
                  label="email"
                  id="email"
                  wd="20vw"
                  onChange={handle}
                  register={{ ...register("email", { required: true }) }}
                />
                {checkEmail ? null : <div>중복된 이메일 입니다.</div>}
                <PrimeInput
                  type="nickname"
                  label="닉네임"
                  id="nickname"
                  wd="20vw"
                  register={{ ...register("nickname", { required: true }) }}
                />
                <PrimeInput
                  type="password"
                  label="비밀번호"
                  id="pw"
                  wd="10vw"
                  register={{ ...register("password", { required: true }) }}
                />
                <PrimeInput
                  type="password"
                  label="비밀번호 확인"
                  id="confirmpw"
                  wd="10vw"
                  register={{
                    ...register("confirmpassword", { required: true }),
                  }}
                />
                <br></br>
                <br></br>
                <PrimaryBtn
                  label="회원가입"
                  type="submit"
                  disabled={!checkEmail}
                />
              </form>
              </RegisterForm>
            </section>
          </ModalBody>
        </Content>
      </Cover>
    </Modal>
  );
}

const Cover = styled.div`
  height: 600px;
  h1 {
    font-family: "Rubik", sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    text-shadow: #2ecc71 -1.5779px 1.86493px 0px, #f39c12 1.5779px 1.86493px 0px;
    cursor: pointer;
    }
    h2 {
      font-weight : bold;
      font-size:1.5rem;
      margin : 0px 0px 20px 0px;
    }
`;

const Text = styled.div`
  img {
    height: 60px;
    width: auto;
  }
`;

const RegisterForm = styled.div`
display: flex;
flex-direction:column;
align-items:center;
div {
  color:#F44848
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

const Content = styled.div`
  height: 500px;
  display: flex;
  text-align: center;
`;
