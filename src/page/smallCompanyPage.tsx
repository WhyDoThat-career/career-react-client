import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { JobCard } from "components/card/smallJobCard";
import { getCompanyData } from "api/companyRepo";
import { Company } from "components/interface/companyInterface";

function SmallCompanyPage() {
  const [companyList, setCompanyList] = useState<Company[]>([] as Company[]);

  useEffect(() => {
    (async () => {
      const result = await getCompanyData("smallcompany");

      console.log("companyList", result);
      setCompanyList(result.data);
    })();
  }, []);

  return (
    <Cover>
      <Content>
        <CardContainer>
          {companyList?.map((company) => (
            <JobCard
              {...company}
              logoImg={company.logo_image}
              title={company.title}
              sector={company.sector}
              newbie={company.newbie}
              companyName={company.company_name}
              platform={company.platform}
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
