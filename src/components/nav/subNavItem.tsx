import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { navState } from 'shared/store';

interface SubNavItemProps {
  name: string;
  itemleng: number;
}

function SubNavItem({ name, itemleng }: SubNavItemProps) {
  const [navInfo, setNav] = useRecoilState(navState);

  return (
    <Cover
      leng={itemleng}
      active={navInfo.activeItem === name}
      onClick={() => {
        setNav((prevState) => {
          return { ...prevState, activeItem: name };
        });
      }}
    >
      {name}
    </Cover>
  );
}

const Cover = styled.div<{ leng: number; active: boolean }>`
  display: flex;
  width: ${({ leng }) => `calc(100% - (100%/${leng}))`};
  height: 100%;
  font-size: ${({ active }) => (active ? '18px' : 'auto')};
  transition: 0.1s font-size ease;

  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#f5f5f5' : 'white')};

  &:hover {
    background-color: #f5f5f5;
  }
`;

export default SubNavItem;
