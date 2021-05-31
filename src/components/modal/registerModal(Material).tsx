import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { PrimeInput } from "components/input";
import { PrimaryBtn } from "components/button";
import { postRegister, postCheckemail } from "api/userRepo";

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

export function RegisterModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
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
    <div style={modalStyle} className={classes.paper}>
      <header>
        <button>x</button>
      </header>
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
            register={{ ...register("confirmpassword", { required: true }) }}
          />
          <PrimaryBtn label="회원가입" type="submit" disabled={!checkEmail} />
        </form>
      </section>
    </div>
  );
}
