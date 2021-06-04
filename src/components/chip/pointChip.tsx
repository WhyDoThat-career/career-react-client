import React from "react";
import styled from "styled-components";

export interface pointChipProps {
  label: string;
}

export function PointPlanet(props: any) {
  const star = props.label.star_point;
  const sector = props.label.sector;
  const employees = props.label.employees;
  const review_count = props.label.review_count;
  const salary_average = props.label.salary_average;
  const salary_count = props.label.salary_count;
  const scale = props.label.scale;
  const establishment_date = props.label.establishment_date;
  return (
    <section>
      <div>별점 : {star} (리뷰 개수: {review_count}개)</div>
      <br></br>
      <div>기업 분류 : {scale}({sector})</div>
      <br></br>
      <div>직원 수 : {employees}</div>
      <br></br>
      <div>평균 연봉 : {salary_average}만원 (등록 건수: {salary_count}건)</div>
      <br></br>
      <div>설립일 : {establishment_date}</div>
    </section>
  );
}

