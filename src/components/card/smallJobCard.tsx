import React, { useState, useEffect } from "react";
import styled from "styled-components";

export interface jobCardInter {
  logoImg: string;
  title: string;
  sector: string;
  newbie: boolean;
  companyName: string;
  platform: string;
}

export function JobCard({
  logoImg,
  title,
  sector,
  newbie,
  companyName,
  platform,
}: jobCardInter) {
  return (
    <Card>
      <Icon src={logoImg} alt="회사 로고 이미지" />
      <CardBody>
        <Title>
          <p>{title}</p>
        </Title>
        <Info>
          <div>
            {sector}
            <span>{newbie ? "신입 가능" : "경력"}</span>
          </div>
          <div>{companyName}</div>
        </Info>
        <Footer>{platform}</Footer>
      </CardBody>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  width: 25vw;
  height: 15vh;
  border: solid;
  border-radius: 10px;
`;

const CardBody = styled.div`
  display: inline-block;
  margin: 5% 1vw;
`;

const Title = styled.div``;

const Info = styled.div`
  span {
    margin: 0 1vw;
  }
`;

const Footer = styled.div`
  text-align: right;
`;

const Icon = styled.img`
  height: 10vh;
  width: 10vh;
  //   border: solid;
  margin: 5% 1vw;
`;
