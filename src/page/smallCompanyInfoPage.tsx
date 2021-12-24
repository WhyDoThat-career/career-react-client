import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { PrimaryBtn } from 'components/button';
import { getJobPlanetData, getIdData } from 'api/companyRepo';
import { PointPlanet } from 'components/chip/pointChip';
import { TagChip } from 'components/chip/tagChip';
import queryString from 'query-string';
import { Company } from 'interface/companyInterface';

export interface companyPlanet {
  crawl_date: string;
  employees: string;
  establishment_date: string;
  id: number;
  interview_count: number;
  interview_feel: string;
  interview_level: string;
  name: string;
  review_count: number;
  salary_average: number;
  salary_count: number;
  scale: string;
  sector: string;
  star_point: number;
}

function SmallCompanyInfoPage() {
  const location = useLocation<any>();
  const query = queryString.parse(location.search);

  const [companyInfo, setCompanyInfo] = useState<any>([] as Company[]);
  const [planetState, setPlanetState] = useState<boolean>(false);
  const [planetDatas, setPlanetDatas] = useState<companyPlanet[]>(
    [] as companyPlanet[],
  );

  useEffect(() => {
    (async () => {
      const result = await getIdData(query.id);
      setCompanyInfo(result.data);
      document.title = `${result.data.title} / ${result.data.company_name}`;
    })();
  }, []);
  // console.log(companyInfo);

  useEffect(() => {
    (async () => {
      const result = await getJobPlanetData(companyInfo.company_name);

      if (result.data.success) {
        setPlanetState(true);
        setPlanetDatas(result.data.data);
      } else {
        setPlanetState(false);
      }
    })();
  }, [companyInfo]);

  const PlatformDiv = () => {
    switch (companyInfo.platform) {
      case 'wanted':
        return (
          <WantedText
            dangerouslySetInnerHTML={{ __html: companyInfo.main_text }}
          />
        );
      case 'roketpunch':
        return (
          <RoketText
            dangerouslySetInnerHTML={{ __html: companyInfo.main_text }}
          />
        );
      case 'programmers':
        return (
          <ProgrammersText
            dangerouslySetInnerHTML={{ __html: companyInfo.main_text }}
          />
        );
      default:
        return <div>Error</div>;
    }
  };

  return (
    <Cover>
      <div className="covercontainer">
        <Logo>
          <img className="logo" src={companyInfo.logo_image} alt="logo img" />
          <PrimaryBtn
            label="지원하기"
            type="button"
            size="large"
            onClick={() => {
              window.open(companyInfo.href);
            }}
          />
        </Logo>
        <header>
          {companyInfo.title} / {companyInfo.company_name}
        </header>
        <Info>
          <div>
            <span className="sector">&nbsp;{companyInfo.sector}&nbsp;</span>
            {companyInfo.newbie ? (
              <span className="newbie">&nbsp;신입 가능&nbsp;</span>
            ) : (
              <span>
                &nbsp;최소 {companyInfo.career?.split(',')[0]}년&nbsp;
              </span>
            )}
            {companyInfo.salary != null ? (
              <span className="salary">
                &nbsp;{companyInfo.salary.replace(',', '만원~')}만원&nbsp;
              </span>
            ) : null}
            <img
              src={`https://whydothat.net/static/img/icon/${companyInfo.platform}.png`}
              alt="platform img"
            />
            {companyInfo.platform}
          </div>
        </Info>
        <hr />
        <div className="jobplanetSearch">
          <img
            src="https://whydothat.net/static/img/icon/jobplanet.png"
            alt="wdticon"
          />
          <h1>&nbsp;&#34;{companyInfo.company_name}&#34; 검색 결과</h1>
        </div>
        {planetState ? <PointPlanet label={planetDatas} /> : <div>없음</div>}
        <hr />
        <SkillStack>
          <h1>언급된 기술 스택</h1>
          <div>
            {companyInfo.skill_tag?.map((tag: string) => (
              <TagChip label={tag} />
            ))}
          </div>
        </SkillStack>
        <PlatformDiv />
      </div>
    </Cover>
  );
}

const SkillStack = styled.div`
  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 10px;
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
  display: flex;
  justify-content: space-between;
  .logo {
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
  }
`;
const Info = styled.div`
  font-size: 1.3rem;
  .sector {
    background-color: #f8ce5e;
  }
  .newbie {
    background-color: #bfe85a;
  }
  .salary {
    background-color: #a9e2f3;
  }
  span {
    margin-right: 10px;
    background-color: #ebbbf5;
    border-radius: 3px;
  }
  img {
    width: 20px;
    margin-bottom: -3px;
  }
`;

const Cover = styled.div`
  display: flex;
  justify-content: center;
  .covercontainer {
    margin: 5vh 0;
    width: 60vw;
    min-width: 350px;
  }
  header {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: 600;
    margin: 0 0 4vh;
  }
  hr {
    /* box-shadow:  */
  }
  .jobplanetSearch {
    display: flex;
    margin-bottom: 10px;
    img {
      width: 130px;
      margin-top: -6px;
    }
    h1 {
      font-size: large;
    }
  }
`;

const WantedText = styled.div`
  h6 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 2vh 0 1vh;
  }
  line-height: 160%;
`;

const RoketText = styled.div`
  h4 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 2vh 0 1vh;
  }
  a {
    color: black;
    text-decoration-line: none;
    pointer-events: none;
    cursor: default;
  }
  line-height: 160%;
`;

const ProgrammersText = styled.div`
  h5 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 2vh 0 1vh;
  }
  line-height: 160%;
`;

export default SmallCompanyInfoPage;
