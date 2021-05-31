import React from "react";
import styled from "styled-components";

export interface pointChipProps {
  label: string;
}

export function PointPlanet(props: any) {
  const star = props.label.star_point;
  const sector = props.label.sector;
  const employees = props.label.employees;

  return (
    <section>
      <div>{star}</div>
      <div>{sector}</div>
      <div>{employees}</div>
    </section>
  );
}
