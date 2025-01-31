import React from "react";

import { Button } from "@nextui-org/react";
import classNames from "classnames";
import styles from "./index.module.scss";

export const Collection = () => {
  return (
    <Button
      radius="full"
      size="sm"
      variant="light"
      className={classNames(styles.collection)}
    >
      <span>Collection</span>
    </Button>
  );
};
