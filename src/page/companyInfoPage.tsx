import { getCompanyList } from "api/companyRepo";
import { Company } from "interface/companyInterface";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function CompanyInfoPage() {
  const [datas, setDatas] = useState<string>("");
  const location = useLocation<any>();

  useEffect(() => {
    console.log("test", location.state);
    setDatas(location.state.tag);
  }, []);

  return <Cover dangerouslySetInnerHTML={{ __html: datas }}></Cover>;
}

const Cover = styled.div`
  display: flex;
  justify-content: center;
`;

export default CompanyInfoPage;
