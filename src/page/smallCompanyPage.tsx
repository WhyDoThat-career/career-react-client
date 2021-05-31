import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import JobCard from "components/card/smallJobCard";
import { getCompanyList } from "api/companyRepo";
import { Company } from "components/interface/companyInterface";
import useObserver from "shared/hook/useObserver";

function SmallCompanyPage() {
  const [companyList, setCompanyList] = useState<Company[]>([] as Company[]);
  const [key, setKey] = useState<string>("smallcompany");
  const [page, setPage] = useState(1);

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
  };

  useEffect(() => {
    setPage(1);
  }, [key]);

  useEffect(() => {
    callCompanies();
  }, [page]);

  return (
    <Cover>
      <Content>
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
`;

const Content = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export default SmallCompanyPage;
