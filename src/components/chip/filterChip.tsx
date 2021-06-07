import React from "react";
import styled from "styled-components";

export interface ChipProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLLIElement>) => void;
  click: boolean;
  name?: string;
}

export function DetailChip({ label, name, click, onClick }: ChipProps) {
  return (
    <DetailCover
      className={`${name} ${click ? "click" : null}`}
      onClick={onClick}
    >
      {label}
    </DetailCover>
  );
}

export function FilterChip({ label, name, click, onClick }: ChipProps) {
  return (
    <FilCover className={`${name} ${click ? "click" : null}`} onClick={onClick}>
      {label}
    </FilCover>
  );
}

const DetailCover = styled.li`
  width: fit-content;
  height: fit-content;
  background-color: white;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 12px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

const FilCover = styled.li`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 1rem;
  /* border: none; */
  font-size: 12px;
  border-radius: 20px;
  cursor: pointer;
`;
