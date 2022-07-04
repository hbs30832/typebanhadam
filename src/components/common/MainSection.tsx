import React from "react";
import styled from "styled-components";
import Feed from "../pages/feed/Feed";
import Sidebar from "./Sidebar";
import { lighten } from "polished";

function MainSection() {
  return (
    <Conatiner>
      <Sidebar />
      <MainContent>
        <Feed />
      </MainContent>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 50px;
  background-color: ${({ theme }) => lighten(0.333, theme.colors.mainColor)};
`;
export default MainSection;
