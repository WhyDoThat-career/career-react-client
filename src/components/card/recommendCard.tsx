import { TagChip } from "components/chip/tagChip";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { postActiveLog } from "api/userRepo";

export interface RecommendCardProps {
  id: number;
  title: string;
  logoImg: string;
  sector: string;
  mainText: string;
  companyName: string;
  platform: string;
  userState: boolean;
  href:string;
}

export function RecommendCard({
  id,
  title,
  logoImg,
  sector,
  mainText,
  companyName,
  platform,
  userState,
  href,
}: RecommendCardProps) {
  const history = useHistory();

  const handleCardClick = () => {
    userState ? postActiveLog("click", id) : console.log();

    history.push(`/small/detail/${id}`, {
      title: title,
      companyName: companyName,
      platform: platform,
      mainText: mainText,
      logoImg:logoImg,
      href:href,
    });
  };

  return (
    <CardBody onClick={handleCardClick}>
      <Title>
        <p>{title}</p>
      </Title>
      <Content>
        <Img src={logoImg} />
      </Content>
      <Footer>
        {/* {tagList?.slice(0, 3).map((tag) => (
          <TagChip label={tag} />
        ))} */}
        <TagChip label={sector} />
      </Footer>
    </CardBody>
  );
}

const CardBody = styled.div`
  display: flex;
  width: 12vw;
  min-width: 200px;
  height: 20vh;
  background-color: white;
  border: none;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  margin: 0 10px;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  padding: 0.5rem;
  height: 20%;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 1px solid #f3f3f4;
  font-weight: bold;
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  p {
    margin: 0;
  }
`;

const Content = styled.div`
  display: flex;
  height: 80%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  gap: 0.5rem;
  margin: 0.5rem 1rem;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;
