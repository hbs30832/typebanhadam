import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderBlock>
      <h1>반하담</h1>
    </HeaderBlock>
  );
}
const HeaderBlock = styled.div`
  padding: 10px;
  h1 {
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: 32px;
    font-weight: 700;
  }
  border-bottom: 5px solid ${({ theme }) => theme.colors.mainColor}; ;
`;

export default Header;
