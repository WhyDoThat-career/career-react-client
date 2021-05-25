import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SubNav from "components/nav/subNav";

function MainPage() {
  return (
    <Cover>
      <div>hi</div>
    </Cover>
  );
}

const Cover = styled.article`
  /* display: flex;
  align-items: center;
  flex-direction: column; */
  width: 100vw;
  height: 100vh;
  background-image: url("./main_img.png");
`;

export default MainPage;
