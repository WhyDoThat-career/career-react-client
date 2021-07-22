import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import JobCard from "components/card/smallJobCard";
import { getCompanyList } from "api/companyRepo";
import { Company } from "interface/companyInterface";
import useObserver from "shared/hook/useObserver";
import { getRecommend } from "api/userRepo";
import { RecommendCard } from "components/card/recommendCard";
import { getCheckUserRepo } from "api/userRepo";
import { FilterModal } from "components/modal/filterModal";
import { PrimaryBtn } from "components/button";
import { NEWBIE } from "shared/resource/option";

function SmallCompanyPage() {
  const [companyList, setCompanyList] = useState<Company[]>([] as Company[]);
  const [key, setKey] = useState<string>("smallcompany");
  const [page, setPage] = useState(1);
  const [recommendList, setRecommendList] = useState<Company[]>(
    [] as Company[],
  );
  const [userName, setUserName] = useState<string>("");
  const [recommendState, setRecommendState] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState(false);
  const [newbieKey, setNewbieKey] = useState(NEWBIE[0].value);

  const { setRef } = useObserver(
    async (entry: any, observer) => {
      // observer.unobserve(entry.target);
      observer.observe(entry.target);

      setPage((prevState) => (prevState += 1));
    },
    { threshold: 0.7 },
  );

  const callCompanies = async () => {
    const result = await getCompanyList(key, newbieKey, page);

    setCompanyList(page === 1 ? result.data : companyList.concat(result.data));
    // console.log(companyList);
  };

  useEffect(() => {
    document.title = `WhyDoThat - 채용공고 페이지`;
    setPage(1);
    // console.log("success", key);

    callCompanies();
  }, [key, newbieKey]);

  useEffect(() => {
    callCompanies();
  }, [page]);

  useEffect(() => {
    (async () => {
      const result = await getRecommend();
      const name = await getCheckUserRepo();

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
        <h2>방금 올라온 따끈따끈한 채용공고</h2>
        <FilterContainer>
          <FilterBtn>
            <PrimaryBtn
              label="원하는 것만 보기"
              type="button"
              size="large"
              onClick={() => setModalShow(true)}
            />
            <FilterModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              clickMethod={(data: string) => setKey(data)}
              newbieMethod={(data: string) => setNewbieKey(data)}
            />
          </FilterBtn>
          {/* <Dropdown data={NEWBIE} clickMethod={setNewbieKey} /> */}
        </FilterContainer>
        <CardContainer>
          {companyList?.map((company, idx) => (
            <JobCard
              {...company}
              ref={idx === companyList.length - 1 ? setRef : null}
              id={company.id}
              logoImg={company.logo_image}
              title={company.title}
              sector={company.sector}
              newbie={company.newbie}
              companyName={company.company_name}
              platform={company.platform}
              mainText={company.main_text}
              userState={recommendState}
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

const FilterContainer = styled.div`
  display: flex;
  margin: 4vh 0 0 0;
`;

const FilterBtn = styled.div`
  button {
    margin-top: 0vh;
  }
`;

const Content = styled.div`
  display: flex;
  width: 80vw;
  min-width: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: xx-large;
    margin: 40px 0px 0px 0px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  margin: 5vh 0;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Recommend = styled.div`
  h2 {
    font-size: xx-large;
    margin: 20px 0px 0px 2vw;
  }
`;

const ReCard = styled.div`
  align-items: center;
  display: flex;
  width: 90vw;
  height: 25vh;
  margin: 20px 0px 0px 0vw;
  /* white-space:nowrap; */
  overflow-x: scroll;
`;

export default SmallCompanyPage;
