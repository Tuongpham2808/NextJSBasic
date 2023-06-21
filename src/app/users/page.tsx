import React from "react";
import getAllUsers from "../../../lib/getAllUsers";
import Link from "next/link";
export const metadata = {
  title: "Users",
};

export default async function UserPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  //   console.log("heloo");
  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users?.map((user) => {
        return (
          <>
            <p key={user.id}></p>
            <Link href={`users/${user.id}`}>{user.name}</Link>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
