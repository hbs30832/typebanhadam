import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { sideBarList } from "../../datas/sidebar";
import SideItem from "./SideItem";

function Sidebar() {
  const location = useLocation();
  return (
    <SidebarBlock>
      {sideBarList.map((side) => (
        <SideItem key={side.id} side={side} pathname={location.pathname} />
      ))}
    </SidebarBlock>
  );
}

const SidebarBlock = styled.div`
  flex-basis: 200px;
`;

export default Sidebar;
