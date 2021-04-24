import { TagChip } from 'components/chip/tagChip';
import React from 'react';
import styled from 'styled-components';

export interface JobCardProps {
  name: string;
  img: string;
  tagList: any[];
}

export function JobCard({ name = '없음', img, tagList }: JobCardProps) {
  return (
    <CardBody>
      <Title>
        <p>{name}</p>
      </Title>
      <Content>
        <Img src={img} />
      </Content>
      <Footer>
        {tagList?.slice(0, 3).map((tag) => (
          <TagChip label={tag} />
        ))}
      </Footer>
    </CardBody>
  );
}

const CardBody = styled.div`
  display: flex;
  width: 15vw;
  min-width: 150px;
  height: 30vh;
  background-color: white;
  border: none;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
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
  width: fit-content;
`;
