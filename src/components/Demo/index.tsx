"use client";
import { useSession, signOut } from "next-auth/react";
import { useCommonStore } from "../../store/common";
import styles from "./index.module.scss";
export const Demo = () => {
  const { data: session, status } = useSession();
  const { name } = useCommonStore();
  return (
    <div className={styles.demo}>
      {name}
      {JSON.stringify(session)}
      {status}
      <div
        onClick={() => {
          signOut();
        }}
      >
        退出登录
      </div>
    </div>
  );
};
