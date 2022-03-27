import React, { FC } from "react";
import styles from "./listItem.module.css";
interface props {
  userData: any;
}

export const ListItem: FC<props> = ({ userData }) => {
  console.log("UserData", userData);
  return (
    <li>
      <div>
        <img className={styles} />
        <div>
          <h2>{userData.login}</h2>
          <p>{userData.public_repos}</p>
        </div>
      </div>
    </li>
  );
};
