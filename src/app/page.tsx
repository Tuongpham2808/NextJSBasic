import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>
        <Link
          href="/about"
          className="px-5 py-2 ml-5 bg-blue-500 rounded-md text-white"
        >
          go to About page
        </Link>
      </div>
    </main>
  );
}
