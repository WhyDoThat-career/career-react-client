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
              <div>지금 당장 WhyDoThat에 참여하세요!</div>
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
                <PrimaryBtn
                  label="회원가입"
                  type="submit"
                  disabled={!checkEmail}
                />
              </form>
            </section>
          </ModalBody>
        </Content>
      </Cover>
    </Modal>
  );
}

const Cover = styled.div`
  height: 600px;
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
