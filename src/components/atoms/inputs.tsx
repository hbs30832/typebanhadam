import styled from "styled-components";

export const InputBox = styled.div`
  display: flex;
  padding: 5px;
  width: 100%;
  border: 1px solid #888;
  input {
    border: none;
    outline: none;
    width: 100%;
  }
`;

export const MediumInput = styled(InputBox)`
  width: 200px;
`;

export const ShortInput = styled(InputBox)`
  width: 100px;
`;
