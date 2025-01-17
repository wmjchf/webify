import React from "react";

import styles from "./index.module.scss";
import { Link } from "../../i18n/routing";
import { Button } from "@nextui-org/react";

interface ICreateShare {
  token?: string;
}
export const CreateShare: React.FC<ICreateShare> = (props) => {
  const { token } = props;
  return (
    <Link href="/create">
      <Button
        startContent={<i className="iconfont icon-tianjia"></i>}
        // size="sm"
        color="danger"
        variant="light"
      >
        Share
      </Button>
    </Link>
  );
};
