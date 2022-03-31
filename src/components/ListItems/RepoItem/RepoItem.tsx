import React, { FC } from "react";
import styles from "./repo.module.scss";

interface propTypes {
  reposData: any;
}

export const RepoItem: FC<propTypes> = ({ reposData }) => {
  console.log("RepoItem", reposData);

  return (
    <li className={styles.repoListItem}>
      <a href={reposData.clone_url} target="_blank">
        <div className={styles.repoItem}>
          <div>
            <h1>{reposData.name}</h1>
          </div>
          <div>
            <p>Forks {reposData.forks_count}</p>
            <p>Stars {reposData.stargazers_count}</p>
          </div>
        </div>
      </a>
    </li>
  );
};
