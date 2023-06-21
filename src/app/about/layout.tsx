import React from "react";
import styles from "./styles.module.css";

export const metadata = {
  title: "About page",
  description: "Generated by create next app",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.main}>{children}</div>;
}
