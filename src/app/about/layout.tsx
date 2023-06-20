import React from "react";
import styles from "./styles.module.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.main}>
      <div className="content">header about page</div>
      {children}
    </div>
  );
}
