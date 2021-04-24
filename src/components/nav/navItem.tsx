import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export interface NavItemProps {
  name: string;
  route: string;
}

export function NavItem({ name, route }: NavItemProps) {
  return (
    <li>
      <CustomNavItem to={`${route}`}>{name}</CustomNavItem>
    </li>
  );
}

const CustomNavItem = styled(NavLink)`
  text-decoration: none;
  color: #000006;
  font-weight: bold;
  transition: 0.1s all ease;

  &:hover {
    font-size: 18px;
  }
`;
