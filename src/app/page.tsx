import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-slate-300">
      <div className="flex-col items-center text-center">
        <h1 className="mb-5 text-2xl font-semibold">Trang chủ</h1>
        <Link
          href="/users"
          className="px-5 py-2 ml-5 bg-blue-500 rounded-md text-white"
        >
          go to Users page
        </Link>
      </div>
    </main>
  );
}
