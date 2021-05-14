import React from 'react';
import { SubNavInfo } from 'shared/subNavInfo';
import SubNavItem from './subNavItem';
import styled from 'styled-components';

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
  width: 70vw;
  height: 3rem;
  /* background-color: #efefef; */
  justify-content: space-around;
  align-items: center;
  margin: 3rem 0;
  border-bottom: 1px solid gray;
`;

export default SubNav;
