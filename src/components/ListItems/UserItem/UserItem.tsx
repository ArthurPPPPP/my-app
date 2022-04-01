import React, { FC } from "react";
import styles from "./userItem.module.scss";
import { IUser } from "../../../types/types";

interface props {
  userData?: IUser;
  onClickHandler: ((event: React.MouseEvent) => void) | undefined;
}

export const UserItem: FC<props> = ({ userData, onClickHandler }) => {
  return (
    <li className={styles.listItem} onClick={onClickHandler}>
      <div className={styles.container}>
        <div className={styles.picture}>
          <img src={userData?.avatar_url} />
        </div>
        <div className={styles.login}>
          <h2>{userData?.login}</h2>
        </div>
        <div className={styles.repos}>
          <p>Repo: {userData?.public_repos}</p>
        </div>
      </div>
    </li>
  );
};
