import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import JobCard from "components/card/smallJobCard";
import { getCompanyList } from "api/companyRepo";
import { Company } from "components/interface/companyInterface";
import useObserver from "shared/hook/useObserver";
import { getRecommend } from "api/userRepo";
import { RecommendCard } from "components/card/recommendCard";
import { getCheckUserRepo } from "api/userRepo";
import { FilterModal } from "components/modal/filterModal";

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

  const { setRef } = useObserver(
    async (entry: any, observer) => {
      // observer.unobserve(entry.target);
      observer.observe(entry.target);

      setPage((prevState) => (prevState += 1));
    },
    { threshold: 0.7 },
  );

  const callCompanies = async () => {
    const result = await getCompanyList(key, page);

    setCompanyList(page === 1 ? result.data : companyList.concat(result.data));
    // console.log(companyList);
  };

  useEffect(() => {
    setPage(1);
    console.log("success", key);
    callCompanies();
  }, [key]);

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
      <FilterBtn>
        <button onClick={() => setModalShow(true)}>filter</button>
        <FilterModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          clickMethod={(data: string) => setKey(data)}
        />
      </FilterBtn>
      <Content>
        <h2>방금 올라온 따끈따끈한 채용공고</h2>
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

const FilterBtn = styled.div`
  button {
    align-items: center;
    display: -webkit-inline-box;
    height: 40px;
    padding: 0 39px 0 15px !important;
    margin: 5vh 0 0 0;
    border-radius: 5px;
    border: 1px solid #ececec;
    position: relative;

    background: #fff;
    color: #333;
    font-weight: 400;
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
