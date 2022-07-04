import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
type Depth = {
  id: number;
  text: string;
  sub: Depth[];
  url: string;
};

function SideItem({ side, pathname }: { side: Depth; pathname: string }) {
  const { text, url, sub } = side;
  const subUrl = sub.map((depth) => depth.url);
  return (
    <SideItemBlock active={subUrl.includes(pathname) || url === pathname}>
      <Link to={url}>
        <p style={{ marginBottom: 10 }}>{text}</p>
      </Link>
      {sub.length > 0 && (
        <SubWrapper>
          {sub.map((depth) => (
            <SubSideBlock key={depth.id} active={pathname === depth.url}>
              <Link to={depth.url}>{depth.text}</Link>
            </SubSideBlock>
          ))}
        </SubWrapper>
      )}
    </SideItemBlock>
  );
}

const SubWrapper = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: 0.25s;
`;

const SubSideBlock = styled.div<{ active: boolean }>`
  padding: 5px 0;
  padding-left: 20px;
  a {
    font-size: 0.8em;
    ${({ active }) =>
      active &&
      css`
        color: black !important;
        font-weight: 700;
      `}
    &:hover {
      color: black;
      font-weight: 700;
    }
  }
`;

const SideItemBlock = styled.div<{
  active: boolean;
}>`
  padding: 10px 20px;

  a {
    text-decoration: none;
    color: ${theme.colors.nonActive};
  }
  ${({ active, theme }) =>
    active &&
    css`
      background-color: #f6f6f6;
      > a {
        color: ${theme.colors.mainColor};
        font-weight: 700;
      }
      ${SubWrapper} {
        max-height: 300px;
      }
    `}
  &:hover {
    background-color: #f6f6f6;
    > a {
      color: ${theme.colors.mainColor};
      font-weight: bold;
    }
    ${SubWrapper} {
      max-height: 300px;
    }
  }
`;

export default SideItem;
