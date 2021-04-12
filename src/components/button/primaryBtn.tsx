import React from 'react';
import styled from 'styled-components';

export interface PrimaryBtnProps {
  label: string;
  size?: 'large' | 'normal' | 'small';
  onClick?: () => void;
}

export function PrimaryBtn({
  label,
  size = 'normal',
  onClick,
}: PrimaryBtnProps) {
  return (
    <Primary size={size} onClick={onClick}>
      {label}
    </Primary>
  );
}

const Primary = styled.button<{ size: 'large' | 'normal' | 'small' }>`
  width: ${({ size }) =>
    size === 'large' ? '200px' : size === 'small' ? '80px' : '152px'};
  height: ${({ size }) =>
    size === 'large' ? '48px' : size === 'small' ? '24px' : '40px'};
  background-color: #304ffe;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-overflow: ellipsis;

  &:hover {
    border: 1px solid #304ffe;
    color: #304ffe;
    background-color: white;
  }
`;
