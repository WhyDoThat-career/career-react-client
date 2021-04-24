import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubNav from 'components/nav/subNav';
import { getCompanyList } from 'api/companyRepo';
import { Company } from 'interface/companyInterface';
import { JobCard } from 'components/card/jobCard';

function MainPage() {
  const [companyList, setCompanies] = useState<Company[]>([] as Company[]);

  useEffect(() => {
    (async () => {
      const result = await getCompanyList('bigcompany');

      console.log('companyList', result);
      setCompanies(result.data);
    })();
  }, []);

  return (
    <Cover>
      <SubNav />
      <CardContainer>
        {companyList?.map((company) => (
          <JobCard
            name={company.title}
            img={company.logo_image}
            tagList={company.skill_tag}
          />
        ))}
      </CardContainer>
    </Cover>
  );
}

const Cover = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export default MainPage;
