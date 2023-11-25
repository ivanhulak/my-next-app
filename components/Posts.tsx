"use client";
import { PostType } from "@/app/blog/page";
import { getAllPosts } from "@/services/getPosts";
import Link from "next/link";
import useSWR from "swr";

export const Posts = () => {
   const { data: posts, isLoading } = useSWR("posts", getAllPosts);
   return (
      <>
         {isLoading ? (
            <h3>Loading...</h3>
         ) : (
            <ul>
               {posts.map((p: PostType) => (
                  <li style={{ borderBottom: "1px solid #eee" }} key={p.id}>
                     <Link href={`/blog/${p.id}`}>{p.title}</Link>
                  </li>
               ))}
            </ul>
         )}
      </>
   );
};
