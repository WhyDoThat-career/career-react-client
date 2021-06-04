import React, { useState, useEffect, forwardRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { classNames } from "react-select/src/utils";
import { postActiveLog } from "api/userRepo";

export interface jobCardInter {
  id: number;
  mainText: string;
  logoImg: string;
  title: string;
  sector: string;
  newbie: boolean;
  companyName: string;
  platform: string;
  userState: boolean;
  href: string;
  salary:string;
  career:string;
  skill_tag: Array<string>;
}

function JobCard(
  {
    id,
    mainText,
    logoImg,
    title,
    sector,
    newbie,
    companyName,
    platform,
    userState,
    href,
    salary,
    career,
    skill_tag,
  }: jobCardInter,
  ref?: any,
) {
  const history = useHistory();

  const handleCardClick = () => {
    userState ? postActiveLog("click", id) : console.log();

    history.push(`/small/detail/${id}`, {
      title: title,
      companyName: companyName,
      platform: platform,
      mainText: mainText,
      href:href,
      logoImg:logoImg,
      salary:salary,
      career:career,
      sector:sector,
      newbie:newbie,
      skill_tag:skill_tag,
    });
  };

  return (
    <Card ref={ref} onClick={handleCardClick}>
      <Icon src={logoImg} alt="회사 로고 이미지" />
      <CardBody>
        <Title>
          <p>{title}</p>
        </Title>
        <Info>
        <div>{companyName}</div>
          <div>
            <div className="tags">
            <span className="sector">&nbsp;{sector}&nbsp;</span>
            {newbie ? (
              <span className="newbie">&nbsp;신입 가능&nbsp;</span>
            ) : (
              <span>&nbsp;최소 {career.split(',')[0]}년&nbsp;</span>
            )}
            </div>
            {salary!=null ? (
              <p>
              <span className="salary">&nbsp;{salary.replace(',','만원~')}만원&nbsp;</span>
              </p>
            ):null}
          </div>
        </Info>
        <Footer>
          <img src={`https://whydothat.net/static/img/icon/${platform}.png`} alt="platform img" />
          {platform}
        </Footer>
      </CardBody>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  width: 410px;
  height: 160px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  cursor: pointer;
`;

const CardBody = styled.div`
  width : 100%;
  display: inline-block;
  margin: 5% 1vw 10px 0px;
`;

const Title = styled.div`
box-sizing : content-box;
height : 50px;
overflow : hidden;
font-weight : bold;
margin-bottom : 5px;
p{
  margin-top : 2px;
}
`;

const Info = styled.div`
  .sector {
    background-color: #f8ce5e;
  }
  .newbie {
    background-color: #bfe85a;
  }
  .salary {
    background-color: #A9E2F3;
  }
  .tags {
    height:40px;
    overflow:hidden;
  }
  span {
    border-radius: 3px;
    /* padding: 0.1rem; */
    margin: 0 10px 0 0;
    background-color: #ebbbf5;
  }
  div {
    margin-bottom : 2px;
  }
  p {
    margin-top : -20px;
    height:20px;
    overflow:hidden;
  }
  line-height : 130%
`;

const Footer = styled.div`
  display : flex;
  justify-content: flex-end;
  img {
    height: 1rem;
    width: auto;
    margin: 0 0.2rem 0 0;
  }
`;

const Icon = styled.img`
  width : 20vw;
  height : 20vh;
  max-height: 115px;
  max-width: 115px;
  //   border: solid;
  margin: 5% 1vw;
`;

export default forwardRef(JobCard);
