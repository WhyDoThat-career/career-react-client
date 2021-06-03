import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { getCompanyList } from 'api/companyRepo';
import { Company } from 'interface/companyInterface';
import { getSector } from 'api/companyRepo';
import JobCard from 'components/card/jobCard';
import Select from 'react-select';
import { FILTER, COMPANYFILTER } from 'shared/resource/option';
import Dropdown from 'components/dropdown/dropdown';
import useObserver from 'shared/hook/useObserver';

function BigCompanyPage() {
  const [companyList, setCompanies] = useState<Company[]>([] as Company[]);
  const [key, setKey] = useState<'kakao' | 'naver'>('naver');
  const [filter, setFilter] = useState(FILTER[0].value);
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

    setCompanies(page === 1 ? result.data : companyList.concat(result.data));
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
`;

const Content = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size : xx-large;
    margin: 40px 0px 0px 0px;
};
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

export default BigCompanyPage;
