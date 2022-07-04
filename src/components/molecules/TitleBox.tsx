import React from "react";
import styled from "styled-components";

function TitleBox({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <>
      <SubTitle>{subTitle}</SubTitle>
      <Title>{title}</Title>
    </>
  );
}

const SubTitle = styled.span`
  color: #888;
  font-size: 12px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
`;
export default TitleBox;
