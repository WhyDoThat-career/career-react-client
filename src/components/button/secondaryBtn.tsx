import React from 'react';
import styled from 'styled-components';

export interface SecondaryBtnProps {
  label: string;
  size?: 'large' | 'normal' | 'small';
}

export function SecondaryBtn({ label, size = 'normal' }: SecondaryBtnProps) {
  return <Secondary size={size}>{label}</Secondary>;
}

const Secondary = styled.button<{ size: 'large' | 'normal' | 'small' }>`
  width: ${({ size }) =>
    size === 'large' ? '200px' : size === 'small' ? '80px' : '152px'};
  height: ${({ size }) =>
    size === 'large' ? '48px' : size === 'small' ? '24px' : '40px'};
  background-color: #7a7cff;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-overflow: ellipsis;
`;
