import React from "react";
import styled from "styled-components";

export interface TagChipProps {
  label: string;
}

export function TagChip({ label }: TagChipProps) {
  return <Cover>{`#${label}`}</Cover>;
}

const Cover = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: white;
  padding: 0.5rem 1rem;
  border: none;
  font-size: 12px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
