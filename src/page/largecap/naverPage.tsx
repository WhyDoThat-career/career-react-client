import { getCompanyList } from 'api/companyRepo';
import { Company } from 'interface/companyInterface';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function NaverPage() {
  const [datas, setDatas] = useState<string>('');
  const [isGetHeader, setHeaderState] = useState(false);
  const location = useLocation<any>();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log('test', location.state);

    location.state.isSnow &&
      // console.log(
      //   'naver header',
      //   location.state.tag.includes('n_career_header'),
      //   location.state.tag,
      // );
    setHeaderState(location.state.tag.includes('n_career_header'));
    setDatas(location.state.tag);
  }, []);

  useEffect(() => {
    if (ref && ref?.current !== undefined) {
      location.state.isSnow &&
        ref?.current &&
        Array.from(ref?.current?.querySelectorAll('span'))
          .filter(
            (item) =>
              item.innerHTML.includes('채용조건') ||
              item.innerHTML.includes('부서소개') ||
              item.innerHTML.includes('담당업무') ||
              item.innerHTML.includes('지원자격') ||
              item.innerHTML.includes('우대사항') ||
              item.innerHTML.includes('필요기술 및 역량') ||
              item.innerHTML.includes('전형절차 및 기타사항') ||
              item.innerHTML.includes('안내사항'),
          )
          .forEach((data) => data.classList.add('li-header'));
    }
  }, [ref?.current]);

  return (
    <Cover>
      <Content>
        {!isGetHeader && !location.state.isSnow && (
          <NaverHeader>Naver Career</NaverHeader>
        )}
        {location.state.isSnow && <SnowHeader>SNOW Career</SnowHeader>}
        <div ref={ref} dangerouslySetInnerHTML={{ __html: datas }}></div>
      </Content>
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  font-size: 16px !important;

  .n_career_paraa {
    font-weight: bolder;
    font-size: 28px;
  }

  .context_area {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 1rem;

    /* div {
      width: fit-content;
    } */
  }
`;

const NaverHeader = styled.div`
  width: 100%;
  line-height: 18px;
  vertical-align: baseline;
  padding: 11px 15px;
  background-color: rgb(0, 199, 60);
  color: white;
`;

const SnowHeader = styled.div`
  width: 100%;
  line-height: 18px;
  vertical-align: baseline;
  padding: 11px 15px;
  background-color: rgb(52, 198, 233);
  color: white;
`;

const Content = styled.div`
  width: 60vw;
  height: 100%;

  .li-header {
    font-weight: bold;
    font-size: 20px !important;
  }
`;

export default NaverPage;
