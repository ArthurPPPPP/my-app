import React, { FC, FormEventHandler } from "react";
import styles from "./searchInput.module.scss";
interface props {
  handlerSubmit?: FormEventHandler;
  inputValue?: string | null;
  onChangeHandler?: any;
  button?: boolean;
  placeholder: string;
}

export const SearchInput: FC<props> = ({
  handlerSubmit,
  inputValue,
  onChangeHandler,
  button,
  placeholder,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <form onSubmit={handlerSubmit}>
        <label>
          <input
            defaultValue={inputValue ?? ""}
            type="search"
            name="user"
            onChange={onChangeHandler}
            placeholder={placeholder}
          />
          {button ? <button type="submit">Search</button> : <></>}
        </label>
      </form>
    </div>
  );
};
