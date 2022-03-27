import React, { FC, FormEventHandler } from "react";

interface props {
  handleSubmit: FormEventHandler;
  inputValue: string | null;
}

export const SearchInput: FC<props> = ({ handleSubmit, inputValue }) => {
  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            defaultValue={inputValue ?? undefined}
            type="search"
            name="user"
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
