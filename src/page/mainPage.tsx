import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import SubNav from 'components/nav/subNav';

function MainPage() {
  return <Cover>{/* <SubNav /> */}</Cover>;
}

const Cover = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default MainPage;
