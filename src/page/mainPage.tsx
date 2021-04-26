import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCompanyList } from "api/companyRepo";

function MainPage() {
  const [companyList, setCompanys] = useState();

  useEffect(() => {
    (async () => {
      const result = await getCompanyList("bigcompany");
      setCompanys(result);
    })();
  }, []);

  useEffect(() => {
    console.log("====================================");
    console.log("companyList", companyList);
    console.log("====================================");
  }, [companyList]);

  return (
    <Cover>
      <h1>hello</h1>
    </Cover>
  );
}

const Cover = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default MainPage;
