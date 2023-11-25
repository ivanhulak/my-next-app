import React from "react";
import styles from "./page.module.css";
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

export type PostType = {
   id: number;
   title: string;
   body: string;
}

export default function Blog() {
   return (
      <>
         <div className="container">
            <h2 className={styles.blog__title}>Blog page</h2>
            <PostSearch />
            <Posts />
         </div>
      </>
   );
}
