import React from "react";
import getUser from "../../../../lib/getUser";
import getUserPost from "../../../../lib/getUserPost";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import { Metadata } from "next";
import getAllUsers from "../../../../lib/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;

  if (!user?.name) {
    return {
      title: "User not found",
    };
  }
  //tạo ra metadata cho mỗi user đc get
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPost(userId);
  //   const [user, userPosts] = await Promise.all([userData, userPostsData]);
  const user = await userData;
  //hiển thị notFound 404 khi có lỗi
  if (!user?.name) return notFound();
  //truyền data qua props và hiển thị loading với suspence
  return (
    <div>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData}></UserPosts>
      </Suspense>
    </div>
  );
}
//lấy ra users để phục vụ SSG
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
