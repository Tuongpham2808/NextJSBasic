import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export default function About() {
  return (
    <div>
      <h2 className={styles.content}>About page</h2>
      <Link
        href="/"
        className="px-5 py-2 ml-5 bg-blue-500 rounded-md text-white"
      >
        go to Home
      </Link>
    </div>
  );
}
