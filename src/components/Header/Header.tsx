import React, { FC,FormEventHandler } from "react";
import { SearchInput } from "../SearchInput/SearchInput";

interface props {
  handleSubmit: FormEventHandler;
  inputValue: string | null;
}

export const Header: FC<props> = ({ handleSubmit, inputValue }) => {
  return (
    <div>
      Header
      <SearchInput handleSubmit={handleSubmit} inputValue={inputValue} />
    </div>
  );
};
