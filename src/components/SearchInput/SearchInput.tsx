import React, { FC, FormEventHandler } from "react";
import styles from "./searchInput.module.scss";
interface props {
  handleSubmit?: FormEventHandler;
  inputValue?: string | null;
  onChangeHandler?: any;
  button?: boolean;
  placeholder: string;
}

export const SearchInput: FC<props> = ({
  handleSubmit,
  inputValue,
  onChangeHandler,
  button,
  placeholder,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            defaultValue={inputValue ?? ""}
            type="search"
            name="user"
            onChange={onChangeHandler}
            placeholder={placeholder}
          />
        </label>
        {button ? <button type="submit">Search</button> : <></>}
      </form>
    </div>
  );
};
