import React from "react";
import styled from "styled-components";
import { SearchTableProps } from "../../../types/common.type";
import { DefaultButton } from "../../atoms/button";
import { InputBox } from "../../atoms/inputs";

function SearchTable({ inputArr, onChange }: SearchTableProps) {
  return (
    <SearchForm>
      <Table>
        <tbody>
          {inputArr.map((input) => (
            <Tr key={input.id}>
              <Td>{input.keyword}</Td>
              <Td>
                <InputBox>
                  <input type="text" name={input.name} onChange={onChange} />
                </InputBox>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <DefaultButton style={{ marginTop: 50 }}>상세원료 등록</DefaultButton>
    </SearchForm>
  );
}

const SearchForm = styled.form`
  text-align: center;
  padding: 40px 30px 30px;
  margin-top: 20px;
  background-color: #fff;
`;

const Tr = styled.tr`
  & + & {
    border-top: 1px solid #888;
  }
`;

const Td = styled.td`
  padding: 10px;
  &:first-child {
    text-align: left;
    width: 120px;
    padding-left: 15px;
    background-color: #f5f5f5;
    border-right: 1px solid #888;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  border: 1px solid #888;
`;

export default SearchTable;
