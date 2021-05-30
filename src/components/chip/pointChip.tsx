import React from "react";
import styled from "styled-components";

export interface pointChipProps {
  label: string;
}

export function PointPlanet({ label }: pointChipProps) {
  return <div>{label}</div>;
}
