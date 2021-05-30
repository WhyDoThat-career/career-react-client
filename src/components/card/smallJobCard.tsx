import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { classNames } from "react-select/src/utils";

export interface jobCardInter {
  id: number;
  mainText: string;
  logoImg: string;
  title: string;
  sector: string;
  newbie: boolean;
  companyName: string;
  platform: string;
}

export function JobCard({
  id,
  mainText,
  logoImg,
  title,
  sector,
  newbie,
  companyName,
  platform,
}: jobCardInter) {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`/small/detail/${id}`, {
      title: title,
      companyName: companyName,
      platform: platform,
      mainText: mainText,
    });
  };

  return (
    <Card onClick={handleCardClick}>
      <Icon src={logoImg} alt="회사 로고 이미지" />
      <CardBody>
        <Title>
          <p>{title}</p>
        </Title>
        <Info>
          <div>
            <span className="sector">{sector}</span>
            {newbie ? (
              <span className="newbie">신입 가능</span>
            ) : (
              <span>경력</span>
            )}
          </div>
          <div>{companyName}</div>
        </Info>
        <Footer>
          <img src={`./static/img/icon/${platform}.png`} alt="platform img" />
          {platform}
        </Footer>
      </CardBody>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  width: 20vw;
  height: 15vh;
  /* box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08); */
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  cursor: pointer;
`;

const CardBody = styled.div`
  display: inline-block;
  margin: 5% 1vw;
`;

const Title = styled.div``;

const Info = styled.div`
  .sector {
    background-color: #ffeaa7;
  }
  .newbie {
    background-color: #2ecc71;
  }
  span {
    border-radius: 3px;
    /* padding: 0.1rem; */
    margin: 0 1vw 0 0;
    background-color: #a29bfe;
  }
`;

const Footer = styled.div`
  text-align: right;
  img {
    height: 1rem;
    width: auto;
    margin: 0 0.2rem 0 0;
  }
`;

const Icon = styled.img`
  height: 10vh;
  width: 10vh;
  //   border: solid;
  margin: 5% 1vw;
`;
