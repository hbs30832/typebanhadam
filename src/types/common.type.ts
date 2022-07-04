import { ChangeEvent } from "react";

export type TableProps = {
  theadArr: string[];
};

export type SearchTableProps = {
  inputArr: { id: number; keyword: string; name: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// button
export type ButtonProps = {
  text: string;
};
