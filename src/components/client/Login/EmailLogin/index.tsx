import classNames from "classnames";
import styles from "./index.module.scss";
import { Button } from "@heroui/react";
import Image from "next/image";

export const EmailLogin = () => {
  return (
    <div className={classNames(styles.email_login)}>
      <Button isIconOnly aria-label="email" color="danger" size="sm">
        <Image src={"/image/header/email.svg"} width={20} height={20} alt="" />
      </Button>
    </div>
  );
};
