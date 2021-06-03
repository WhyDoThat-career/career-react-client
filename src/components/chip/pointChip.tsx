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
      <div>별점 : {star}</div>
      <br></br>
      <div>기업 분류 : {sector}</div>
      <br></br>
      <div>직원 수 : {employees}</div>
      <br></br>
    </section>
  );
}

