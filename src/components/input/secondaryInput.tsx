import React from "react";
import styled from "styled-components";

export interface SecondaryInputProps {
  id: string;
  label: string;
}

export function SecondaryInput({ id, label }: SecondaryInputProps) {
  return (
    <InputCover>
      <label htmlFor={id}>{label}</label>
      <CustomInput type="text" placeholder={label} />
    </InputCover>
  );
}

const InputCover = styled.span`
  display: flex;
  width: fit-content;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;

const CustomInput = styled.input`
  height: 28px;

  background-color: #efefef;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;

    box-shadow: 0px 0px 8px #efefef;
  }
`;
