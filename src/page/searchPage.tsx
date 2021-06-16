import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { getsearchData } from "api/companyRepo";
import { Company } from "components/interface/companyInterface";
import useObserver from "shared/hook/useObserver";
import JobCard from "components/card/smallJobCard";

function SearchPage() {
  const location = useLocation<any>();
  const [searchCompany, setSearchCompany] = useState<Company[]>(
    [] as Company[],
  );
  const [page, setPage] = useState(1);
  const [key, setKey] = useState<string>("");

  //   setKey(location.state);
  const data: string = location.state;

  const { setRef } = useObserver(
    async (entry: any, observer) => {
      // observer.unobserve(entry.target);
      observer.observe(entry.target);

      setPage((prevState) => (prevState += 1));
      console.log(page);
    },
    { threshold: 0.7 },
  );

  const callCompanies = async () => {
    const result = await getsearchData(data);

    setSearchCompany(
      page === 1 ? result.data : searchCompany.concat(result.data),
    );
    // console.log(companyList);
  };

  useEffect(() => {
    setPage(1);
    console.log("success", data);

    callCompanies();
  }, [data]);

  useEffect(() => {
    callCompanies();
  }, [page]);

  console.log(searchCompany);

  return (
    <Cover>
      <Content>
        <h2>"{data}" 검색 결과</h2>
        <CardContainer>
          {searchCompany?.map((company, idx) => (
            <JobCard
              {...company}
              ref={idx === searchCompany.length - 1 ? setRef : null}
              id={company.id}
              logoImg={company.logo_image}
              title={company.title}
              sector={company.sector}
              newbie={company.newbie}
              companyName={company.company_name}
              platform={company.platform}
              mainText={company.main_text}
              userState={false}
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

export default SearchPage;
