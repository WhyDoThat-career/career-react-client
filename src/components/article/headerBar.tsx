import React, { useState } from 'react';
import { PrimaryBtn } from 'components/button';
import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap';
import { useRecoilValue } from 'recoil';
import { userState } from 'shared/store';
import { useHistory, Link } from 'react-router-dom';
import { NavItem } from 'components/nav/navItem';

export interface HeaderBarProps {
  isLogin: boolean;
}

export function HeaderBar({ isLogin }: HeaderBarProps) {
  // const user = useRecoilValue(userState);
  const history = useHistory();
  return (
    <Cover>
      <Logo onClick={() => history.push('/')}>
        <h1>Why Do That?</h1>
      </Logo>

      <nav>
        <ul>
          <li>
            <NavItem name="대기업" route="/대기업"/>
          </li>
        </ul>
      </nav>

      <ButtonContainer>
        <Search size="24" style={{ margin: '0 1rem ', cursor: 'pointer' }} />
        <PrimaryBtn
          label={isLogin ? '로그아웃' : '로그인'}
          onClick={() => console.log('test')}
        />
      </ButtonContainer>
    </Cover>
  );
}

const Cover = styled.header`
  display: flex;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);

  ul {
    li {
      list-style: none;
    }
  }
`;

const Logo = styled.div`
  cursor: pointer;

  p {
    font-weight: bolder;
  }
`;

const ButtonContainer = styled.span`
  display: flex;
  width: fit-content;
  align-items: center;


`;
