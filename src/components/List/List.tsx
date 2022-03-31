import React, { FC } from "react";
import { UserItem } from "../ListItems/UserItem/UserItem";
import { RepoItem } from "../ListItems/RepoItem/RepoItem";
import styles from "./list.module.scss";
import { IUser } from "../../types/types";
import { IRepo } from "../../types/types";
interface props {
  userData?: IUser;
  reposData?: IRepo[];
  onClickHandler?: ((event: React.MouseEvent) => void) | undefined;
}
export const List: FC<props> = ({ userData, reposData, onClickHandler }) => {
  return (
    <ul className={styles.list}>
      {reposData ? (
        reposData?.map((n: any) => <RepoItem reposData={n} key={n.id} />)
      ) : (
        <UserItem userData={userData} onClickHandler={onClickHandler} />
      )}
    </ul>
  );
};
