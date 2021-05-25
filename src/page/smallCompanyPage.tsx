import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import { JobCard } from "components/card/smallJobCard";
import { getCompanyData } from "api/companyRepo";
import { Company } from "components/interface/companyInterface";
import InfiniteScroll from "react-infinite-scroll-component";

function SmallCompanyPage() {
  const [companyList, setCompanyList] = useState<Company[]>([] as Company[]);
  const [pageNum, setPageNum] = useState(2);

  const handleCompanyData = async () => {
    console.log(pageNum);
    const data = await getCompanyData(`smallcompany?page=${pageNum}`);
    // setCompanyList(Object.assign(companyList, data.data));
    companyList.push.apply(companyList, data.data);
    console.log(companyList);
  };

  useEffect(() => {
    (async () => {
      const result = await getCompanyData("smallcompany");
      // await handleCompanyData();
      // console.log("companyList", result.data);
      setCompanyList(result.data);
    })();
  }, []);

  // const handled = () => {
  //   setPageNum(pageNum + 20);
  //   handleCompanyData();
  // };

  const fetchMoreData = () => {
    setTimeout(() => {
      setPageNum(pageNum + 1);
      handleCompanyData();
    }, 1500);
  };

  return (
    <Cover>
      <Content>
        <InfiniteScroll
          dataLength={pageNum}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <CardContainer>
            {companyList?.map((company) => (
              <JobCard
                {...company}
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
        </InfiniteScroll>
        {/* <button onClick={handled}>+</button> */}
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
