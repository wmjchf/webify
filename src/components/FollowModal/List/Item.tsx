import React from "react";
import { IUser } from "../../../service/public";

interface IItem {
  data: IUser;
}
export const Item: React.FC<IItem> = (props) => {
  const { data } = props;
  return <div></div>;
};
