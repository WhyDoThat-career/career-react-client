import { TagChip } from 'components/chip/tagChip';
import React, { useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export interface JobCardProps {
  id: number;
  name: string;
  img: string;
  sector: string;
  main_text: string;
  company: 'kakao' | 'naver';
  href: string;
  career:string;
  newbie:boolean;
  skill_tag: Array<string>;
  title: string;
}

function JobCard(
  { id, name = '없음', img, sector, main_text, company, title,href,career,newbie,skill_tag }: JobCardProps,
  ref?: any,
) {
  const history = useHistory();
  const handleCardClick = () => {
    history.push(`/big/detail/${company}/${id}`, {
      tag: main_text,
      isSnow: name.includes('SNOW'),
      title: title,
      img:img,
      href:href,
      career:career,
      sector:sector,
      newbie:newbie,
      skill_tag:skill_tag,
    });
  };

  return (
    <CardBody ref={ref} onClick={handleCardClick}>
      <Title>
        <p>{name}</p>
      </Title>
      <Content>
        <Img src={img} />
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
  width: 10vw;
  min-width: 135px;
  height: 20vh;
  background-color: white;
  border: none;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  padding: 0.5rem;
  height: 30%;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-weight: bold;
  box-sizing: border-box;
  font-size : 0.8rem;

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
  width: 80%;
  height: 20%;
  gap: 0.5rem;
  margin: 0.5rem 0.5rem;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 100px;
  height: auto;
`;

export default forwardRef(JobCard);
