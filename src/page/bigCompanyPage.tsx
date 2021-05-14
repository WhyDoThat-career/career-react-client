import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getCompanyList } from "api/companyRepo";
import { Company } from "interface/companyInterface";
import { getSector } from "api/companyRepo";
import { JobCard } from "components/card/jobCard";
import Select from "react-select";
import { FILTER } from "shared/resource/option";
import Dropdown from "components/dropdown/dropdown";

function BigCompanyPage() {
  const [companyList, setCompanies] = useState<Company[]>([] as Company[]);

  const [filter, setFilter] = useState(FILTER[0].value);

  useEffect(() => {
    (async () => {
      const result = await getCompanyList("bigcompany");

      console.log("companyList", result);
      setCompanies(result.data);
    })();
  }, []);

  return (
    <Cover>
      <Content>
        <FilterContainer>
          <Dropdown data={FILTER} clickMethod={setFilter} />
        </FilterContainer>
        <CardContainer>
          {companyList?.map((company) => (
            <JobCard
              {...company}
              name={company.title}
              img={company.logo_image}
              tagList={company.skill_tag}
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
