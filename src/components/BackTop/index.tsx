"use client";
import { Button } from "@heroui/react";
import styles from "./index.module.css";
import { useEffect } from "react";

export const BackTop = () => {
  return (
    <div className={styles.backTop}>
      <Button
        isIconOnly
        aria-label="Like"
        color="danger"
        radius="full"
        onPress={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <i className="iconfont icon-jiantou_xiangshang"></i>
      </Button>
    </div>
  );
};
