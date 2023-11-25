"use client";

import React from "react";
import styles from "./page.module.css";
import { getAllPosts } from '../../services/getPosts';
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

export type PostType = {
   id: number;
   title: string;
   body: string;
}

export default function Blog() {
   const [posts, setPosts] = React.useState<PostType[]>([]);
   const [loading, setLoading] = React.useState(true);

   React.useEffect(() => {
      getAllPosts()
         .then(setPosts)
         .finally(() => setLoading(false))
   }, []);

   return (
      <>
         <div className="container">
            <h2 className={styles.blog__title}>Blog page</h2>
            <PostSearch onSearch={setPosts}/>
            {loading ? (
               <h3>Loading...</h3>
            ) : (
               <Posts posts={posts}/>
            )}
         </div>
      </>
   );
}
