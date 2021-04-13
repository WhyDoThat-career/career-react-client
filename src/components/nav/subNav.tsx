import React from "react";
import { SubNavInfo } from "shared/subNavInfo";
import SubNavItem from "./subNavItem";
import styled from "styled-components";

function SubNav() {
  return (
    <Cover>
      {SubNavInfo.map((info) => (
        <SubNavItem name={info.name} itemleng={SubNavInfo.length} />
      ))}
    </Cover>
  );
}

const Cover = styled.div`
  display: flex;
  width: 80vw;
  height: 5rem;
  background-color: #efefef;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;

export default SubNav;
