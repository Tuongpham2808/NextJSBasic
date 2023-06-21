import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export default function About() {
  // throw new Error("Not today");
  return (
    <main className="w-full h-screen flex items-center justify-center bg-slate-300">
      <div className="flex-col items-center text-center">
        <h1 className="mb-5 text-2xl font-semibold">Trang About</h1>
        <Link
          href="/"
          className="px-5 py-2 ml-5 bg-blue-500 rounded-md text-white"
        >
          go to Home page
        </Link>
      </div>
    </main>
  );
}
