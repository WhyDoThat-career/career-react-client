import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { PrimaryBtn } from "components/button";
import { TagChip } from 'components/chip/tagChip';

function KakaoPage() {
  const [datas, setDatas] = useState<string>('');
  const location = useLocation<any>();
  const ref = useRef<HTMLDivElement>(null);
  window.scrollTo(0, 0);

  useEffect(() => {
    setDatas(location.state.tag);
  }, []);

  useEffect(() => {
    if (ref && ref?.current !== undefined) {
      ref?.current &&
        Array.from(
          ref?.current?.querySelectorAll('.emph_desc'),
        ).forEach((data) => data.classList.add('li-header'));
    }
  }, [ref?.current]);

  return (
    <Cover>
      <div className='covercontainer'>
      <Logo>
      <img className='logo' src={location.state.img}/>
      <PrimaryBtn label="지원하기" type="button" size="large" onClick={() => {
                  window.open(location.state.href);
                }}/>
      </Logo>
      <header>
        {location.state.title} / {location.state.company}
      </header>
      <Info>
          <div>
            <span className="sector">&nbsp;{location.state.sector}&nbsp;</span>
            {location.state.newbie ? (
              <span className="newbie">&nbsp;신입 가능&nbsp;</span>
            ) : (
              <span>&nbsp;최소 {location.state.career.split(',')[0]}년&nbsp;</span>
            )}
          </div>
        </Info>
      <hr />
      <SkillStack>
        <h1>언급된 기술 스택</h1>
        <div>
        {location.state.skill_tag?.map((tag:any) => (
          <TagChip label={tag} />
        ))}</div>
      </SkillStack>
      <Content>
        <KakaoHeader>KAKAO 채용</KakaoHeader>
        <div ref={ref} dangerouslySetInnerHTML={{ __html: datas }}></div>
      </Content>
      </div>
    </Cover>
  );
}

const SkillStack = styled.div`
margin-bottom : 1vh;
  h1{
    font-size : 1.4rem;
    font-weight:bold;
    margin-bottom:10px;
  }
  div {
    display: flex;
    height: 20%;
    gap: 0.3rem;
    margin: 0.03rem;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
`;

const Logo = styled.div`
  display : flex;
  justify-content: space-between;
  .logo {
    width : 150px;
    height : 150px;
    margin-bottom : 20px
  }
`;
const Cover = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  font-size: 16px !important;
  .covercontainer {
    margin: 5vh 0 ;
    width : 60vw;
    min-width:350px;
  }
  header {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 4vh;
  }
`;

const KakaoHeader = styled.div`
  width: 100%;
  line-height: 18px;
  vertical-align: baseline;
  padding: 11px 15px;
  background-color: #ffd709;
  color: white;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  height: 100%;

  .area_cont {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .li-header {
    font-weight: bold;
    font-size: 20px !important;
  }
`;

const Info = styled.div`
font-size : 1.3rem;
.sector {
  background-color: #f8ce5e;
}
.newbie {
  background-color: #bfe85a;
}
span {
  margin-right : 10px;
  background-color: #ebbbf5;
  border-radius: 3px;
}
`;

export default KakaoPage;
