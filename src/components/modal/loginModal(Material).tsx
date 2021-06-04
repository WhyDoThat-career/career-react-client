import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Modal from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { PrimeInput } from "components/input";
import { PrimaryBtn } from "components/button";
import {
  postCheckemail,
  postCheckloginpassword,
  getGoogleLogin,
  getGithubLogin,
} from "api/userRepo";
import { RegisterModal } from "components/modal/registerModal(Material)";
import { constSelector } from "recoil";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      height: 600,
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export function LoginModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [membershipOpen, setMembershipOpen] = useState(false);
  const history = useHistory();
  const [checkEmail, setChekcEmail] = useState(true);

  const openMemModal = () => {
    setMembershipOpen(true);
  };
  const closeMemModal = () => {
    setMembershipOpen(false);
  };

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

      // console.log("====================================");
      // console.log(checkLogin);
      // console.log("====================================");

      if (checkLogin === true) {
        window.location.reload();
        // console.log("replace");
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

  const handleGoogleClick = () => {
    (async () => {
      await getGoogleLogin();
    })();
  };

  const handleGithubClick = () => {
    (async () => {
      await getGithubLogin();
    })();
  };

  return (
    <Cover>
      <div style={modalStyle} className={classes.paper}>
        <header>
          <button className="close">x</button>
        </header>
        <section>
          <img src="https://whydothat.net/static/img/wdticon.png" alt="WhyDoThat logo"></img>
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
            <PrimaryBtn label="로그인" type="submit" disabled={!checkEmail} />
          </form>
          <PrimaryBtn
            label="google 로 로그인 하기"
            type="button"
            onClick={(e: any) => {
              e.preventDefault();
              window.location.href = `${process.env.REACT_APP_API_URL}/login/google`;
            }}
          />
          <PrimaryBtn
            label="github 으로 로그인 하기"
            type="button"
            onClick={(e: any) => {
              e.preventDefault();
              window.location.href = "/api/login/github";
            }}
          />
          <button onClick={openMemModal}>회원가입</button>
          <Modal
            open={membershipOpen}
            onClose={closeMemModal}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <RegisterModal />
          </Modal>
        </section>
      </div>
    </Cover>
  );
}

const Cover = styled.div`
  img {
    height: 5vh;
    width: auto;
  }
`;
