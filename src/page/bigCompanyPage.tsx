import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { getCompanyList } from "api/companyRepo";
import { Company } from "interface/companyInterface";
import { getSector } from "api/companyRepo";
import JobCard from "components/card/jobCard";
import Select from "react-select";
import { FILTER, COMPANYFILTER, NEWBIE } from "shared/resource/option";
import Dropdown from "components/dropdown/dropdown";
import useObserver from "shared/hook/useObserver";
import { getRecommend } from "api/userRepo";
import { RecommendCard } from "components/card/recommendCard";
import { getCheckUserRepo } from "api/userRepo";

function BigCompanyPage() {
  const [companyList, setCompanies] = useState<Company[]>([] as Company[]);
  const [key, setKey] = useState<"kakao" | "naver">("naver");
  const [filter, setFilter] = useState(FILTER[0].value);
  const [newbie, setNewbie] = useState(NEWBIE[0].value);
  const [page, setPage] = useState(1);
  const [recommendList, setRecommendList] = useState<Company[]>(
    [] as Company[],
  );
  const [userName, setUserName] = useState<string>("");
  const [recommendState, setRecommendState] = useState<boolean>(false);

  const { setRef } = useObserver(
    async (entry: any, observer) => {
      // observer.unobserve(entry.target);
      observer.observe(entry.target);

      setPage((prevState) => (prevState += 1));
    },
    { threshold: 0.7 },
  );

  const callCompanies = async () => {
    const result = await getCompanyList(key, newbie, page);

    setCompanies(page === 1 ? result.data : companyList.concat(result.data));
  };

  useEffect(() => {
    setPage(1);
  }, [key]);

  useEffect(() => {
    callCompanies();
  }, [page]);

  useEffect(() => {
    (async () => {
      const result = await getRecommend();
      const name = await getCheckUserRepo();

      // console.log(.data);
      setRecommendList(result.data);

      if (name.data === "알 수 없는 사용자") {
        setRecommendState(false);
      } else {
        setRecommendState(true);
        setUserName(name.data.nickname);
      }
    })();
  }, []);

  return (
    <Cover>
      {recommendState ? (
        <Recommend>
          <h2>{userName}님에게 꼭 맞는 채용공고</h2>
          <ReCard>
            {recommendList?.map((recommendCom) => (
              <RecommendCard
                {...recommendCom}
                id={recommendCom.id}
                title={recommendCom.title}
                logoImg={recommendCom.logo_image}
                sector={recommendCom.sector}
                mainText={recommendCom.main_text}
                companyName={recommendCom.company_name}
                platform={recommendCom.platform}
                userState={recommendState}
              />
            ))}
          </ReCard>
        </Recommend>
      ) : (
        <div className="needLogin">
          <img
            src="https://whydothat.net/static/img/Recommend_need_login.png"
            alt="Recommend need login"
          />
        </div>
      )}
      <Content>
        <h2>대기업 채용공고</h2>
        <FilterContainer>
          <Dropdown data={COMPANYFILTER} clickMethod={setKey} />
          <Dropdown data={FILTER} clickMethod={setFilter} />
        </FilterContainer>
        <CardContainer>
          {companyList?.map((company, idx) => (
            <JobCard
              {...company}
              ref={idx === companyList.length - 1 ? setRef : null}
              key={company.id}
              name={company.title}
              img={company.logo_image}
              sector={company.sector}
              main_text={company.main_text}
              company={key}
            />
          ))}
        </CardContainer>
      </Content>
    </Cover>
  );
}

const Cover = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .needLogin {
    width: 100vw;
    display: flex;
    justify-content: center;
    img {
      overflow-x: hidden;
    }
  }
`;

const Content = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: xx-large;
    margin: 40px 0px 0px 0px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  justify-content: flex-end;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;
const Recommend = styled.div`
  h2 {
    font-size: xx-large;
    margin: 20px 0px 0px 6vw;
  }
`;

const ReCard = styled.div`
  display: flex;
  width: 90vw;
  height: 300px;
  margin: 20px 0px 0px 5vw;
  /* white-space:nowrap; */
  overflow-x: scroll;
`;

export default BigCompanyPage;
