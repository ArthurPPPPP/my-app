import React, { FC } from "react";
import { ListItem } from "../ListItem/ListItem";
interface props {
  userData: object;
}
export const UserList: FC<props> = ({userData}) => {
  return (
    <ul>
      <ListItem userData={userData} />
    </ul>
  );
};
