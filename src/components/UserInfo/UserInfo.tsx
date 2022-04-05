import React, { FC } from "react";
import styles from "./userInfo.module.scss";
import { IUser } from "../../types/types";
interface propTypes {
  userData: IUser;
}

export const UserInfo: FC<propTypes> = ({ userData }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userCard}>
        <div className={styles.avatar}>
          <img src={userData.avatar_url} alt="Avatar" />
        </div>
        <div className={styles.userInfo}>
          <p>Username: {userData.login}</p>
          <p>
            Email: {userData.email === null ? "Email is hiden" : userData.email}
          </p>
          <p>JoinDate: {userData.created_at}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
        </div>
      </div>
      <p>bio:{userData.bio}</p>
    </div>
  );
};
