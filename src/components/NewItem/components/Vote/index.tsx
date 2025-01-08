import React from "react";

import { Button } from "@nextui-org/react";
import classNames from "classnames";

import ShangCai from "./shangcai.svg";
import XiaCai from "./xiacai.svg";

import styles from "./index.module.scss";
import Image from "next/image";

export const Vote = () => {
  return (
    <Button
      radius="full"
      size="sm"
      startContent={
        <Image src={ShangCai} width={10} height={10} alt=""></Image>
      }
      endContent={<Image src={XiaCai} width={10} height={10} alt=""></Image>}
      className={classNames(styles.collection)}
    >
      <span className="font-medium">Vote</span>
    </Button>
  );
};
