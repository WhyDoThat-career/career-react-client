import React from "react";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import WdtCon from "components/img/wdtcon.png";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

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
  return (
    <div style={modalStyle} className={classes.paper}>
      <header>
        <button className="close">x</button>
      </header>
      <section>
        <img src={WdtCon} alt="WhyDoThat logo"></img>
        <div>Why Do That!</div>
        <div>지금 채용공고를 확인하세요!</div>
        <form>
          <input
            type="email"
            className="form-email"
            id="email"
            placeholder="이메일을 입력하세요."
          ></input>
          <input
            type="password"
            className="form-password"
            id="password"
            placeholder="비밀 번호"
          ></input>
        </form>
      </section>
    </div>
  );
}

const Cover = styled.div``;
