import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const DefaultButton = styled.button`
  padding: 10px 0;
  width: 180px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.mainColor};
  font-weight: 700;
  text-align: center;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`;
