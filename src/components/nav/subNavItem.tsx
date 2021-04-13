import React from "react";
import styled from "styled-components";

interface SubNavItemProps {
  name: string;
  itemleng: number;
}

function SubNavItem({ name, itemleng }: SubNavItemProps) {
  return <Cover leng={itemleng}>{name}</Cover>;
}

const Cover = styled.div<{ leng: number }>`
  display: flex;
  width: ${({ leng }) => `calc(100% - (100%/${leng}))`};
  height: 100%;

  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default SubNavItem;
