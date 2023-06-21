import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-full h-full flex item-center justify-center p-5">
      <div className="flex flex-col items-center gap-3">
        <h3>404! Not found page</h3>
        <Link href="/" className="bg-blue-500 text-white p-3 rounded-lg">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
