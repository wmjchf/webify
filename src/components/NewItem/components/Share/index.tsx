import React from "react";

import { Button } from "@heroui/react";
import classNames from "classnames";
import styles from "./index.module.scss";

export const Share = () => {
  return (
    <Button
      radius="full"
      size="sm"
      variant="light"
      className={classNames(styles.share)}
    >
      <span>Share</span>
    </Button>
  );
};
