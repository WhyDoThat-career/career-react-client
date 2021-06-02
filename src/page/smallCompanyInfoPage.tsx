import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { PrimaryBtn } from "components/button";
import { getJobPlanetData } from "api/companyRepo";
import { PointPlanet } from "components/chip/pointChip";

export interface datasProps {
  title: string;
  companyName: string;
  platform: string;
  mainText: string;
}
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
  const [planetState, setPlanetState] = useState<boolean>(false);
  const [planetDatas, setPlanetDatas] = useState<companyPlanet[]>(
    [] as companyPlanet[],
  );

  const datas: datasProps = location.state;

  useEffect(() => {
    (async () => {
      const result = await getJobPlanetData(datas.companyName);
      console.log("companyList", result.data.success);
      if (result.data.success) {
        setPlanetState(true);
        setPlanetDatas(result.data.data);
      } else {
        setPlanetState(false);
      }
      // setCompanyList(result.data);
    })();
  }, []);

  const PlatformDiv = () => {
    switch (datas.platform) {
      case "wanted":
        return (
          <WantedText dangerouslySetInnerHTML={{ __html: datas.mainText }} />
        );
      case "roketpunch":
        return (
          <RoketText dangerouslySetInnerHTML={{ __html: datas.mainText }} />
        );
      case "programmers":
        return (
          <ProgrammersText
            dangerouslySetInnerHTML={{ __html: datas.mainText }}
          />
        );
      default:
        return <div>Error</div>;
    }
  };

  return (
    <Cover>
      <header>
        {datas.title} / {datas.companyName}
        <PrimaryBtn label="지원하기" type="button" size="normal" />
      </header>
      <hr />
      {planetState ? <PointPlanet label={planetDatas} /> : <div>없음</div>}
      <hr />
      <PlatformDiv />
    </Cover>
  );
}

const Cover = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  margin: 5vh 0;
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
`;

const WantedText = styled.div`
  h6 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1vh 0 2vh;
  }
`;

const RoketText = styled.div`
  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1vh 0 2vh;
  }
  a {
    color: black;
    text-decoration-line: none;
    pointer-events: none;
    cursor: default;
  }
`;

const ProgrammersText = styled.div`
  h5 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1vh 0 2vh;
  }
`;

export default SmallCompanyInfoPage;
