import React from 'react';
import styled from 'styled-components';

export interface PrimeInputProps {
  type?: string;
  id?: string;
  label?: string;
  wd?: string;
  register: any;
}

export function PrimeInput({
  type = 'text',
  id,
  label,
  wd,
  register,
}: PrimeInputProps) {
  return (
    <InputCover>
      <label htmlFor={id}>{label}</label>
      <CustomInput type={type} placeholder={label} wd={wd} {...register} />
    </InputCover>
  );
}

const InputCover = styled.span`
  display: flex;
  width: fit-content;
  min-width: 200px;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;

const CustomInput = styled.input<{ wd?: string }>`
  width: ${({ wd }) => (wd ? `${wd}` : 'fit-content')};

  height: 28px;
  border: 1px solid #dbdbdb;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px #58a5ff;
  }
`;
