import React, { FC } from "react";
import styles from "./list.module.scss";

import { IRepo } from "../../types/types";
import { RepoItem } from "../Items/RepoItem/RepoItem";


interface props {
  reposData: IRepo[];
  onClickHandler?: ((event: React.MouseEvent) => void) | undefined;
}

export const List: FC<props> = ({ reposData, onClickHandler }) => {
  return (

    <ul className={styles.list}>
      {reposData.map((n: IRepo) => (
        <RepoItem reposData={n} key={n.id} />
      ))}
    </ul>
  );
      }
