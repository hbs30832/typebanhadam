import React, { ChangeEvent, ChangeEventHandler } from "react";
import { atom, useRecoilState } from "recoil";
import styled from "styled-components";
import SearchTable from "../../molecules/Table/SearchTable";
import Table from "../../molecules/Table/Table";
import TitleBox from "../../molecules/TitleBox";

const theadArr: string[] = [
  "회사 *",
  "브랜드 *",
  "사료명 *",
  "연령대 * (필터)",
  "사료타입 *",
  "kg당 가격 *",
  "주원료",
  "삭제",
];

const inputState = atom({
  key: "inputState",
  default: {
    brand: "",
    feed: "",
  },
});

function Feed() {
  const [inputs, setInputs] = useRecoilState(inputState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <div>
      <TitleBox title="사료 전체 목록" subTitle="사료 관리 >" />
      <SearchTable
        inputArr={[
          { id: 1, keyword: "브랜드 명", name: "brand" },
          { id: 2, keyword: "사료명", name: "feed" },
        ]}
        onChange={onChange}
      />
    </div>
  );
}

export default Feed;
