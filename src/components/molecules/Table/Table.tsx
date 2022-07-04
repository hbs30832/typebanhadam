import React from "react";
import styled from "styled-components";
import { TableProps } from "../../../types/common.type";

function Table({ theadArr }: TableProps) {
  return (
    <TableBlock>
      <Thead>
        <Tr>
          {theadArr.map((str) => (
            <Td>{str}</Td>
          ))}
        </Tr>
      </Thead>
      <tbody>
        <Tr>
          {theadArr.map((str) => (
            <Td>{str}</Td>
          ))}
        </Tr>
        <Tr>
          {theadArr.map((str) => (
            <Td>{str}</Td>
          ))}
        </Tr>
      </tbody>
    </TableBlock>
  );
}

const Tr = styled.tr`
  & + & {
    border-top: 1px solid #888;
  }
`;

const Td = styled.td`
  text-align: center;
  & + & {
    border-left: 1px solid #888;
  }
`;

const TableBlock = styled.table`
  border: 1px solid #888;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  ${Tr} {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: #fff;
    font-weight: 500;
    border-bottom: 1px solid #888;
  }
`;

export default Table;
