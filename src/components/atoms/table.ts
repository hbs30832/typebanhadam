import styled from "styled-components";

const table = {
  Table: styled.table`
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: #fff;
    text-align: center;
    font-weight: 700;
    border: 1px solid #888;
    border-collapse: collapse;
  `,
  Thead: styled.thead`
    tr {
      background-color: ${({ theme }) => theme.colors.mainColor};
      font-weight: 500;
      color: #fff;
      & + & {
        border-top: 1px solid #888;
      }
    }
  `,
  Tbody: styled.tbody``,
  TR: styled.tr``,
  TD: styled.td`
    & + & {
      border-left: 1px solid #888;
    }
  `,
};

export default table;
