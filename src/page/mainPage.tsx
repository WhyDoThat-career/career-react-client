import SubNav from "components/nav/subNav";
import React from "react";
import styled from "styled-components";

function MainPage() {
  return (
    <Cover>
      <SubNav />

      <p>Main</p>
    </Cover>
  );
}

const Cover = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default MainPage;
