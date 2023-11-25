import { PostType } from "@/app/blog/page";
import Link from "next/link";

type Props = {
   posts: PostType[]
};

export const Posts = ({ posts }: Props) => {
   return (
      <ul>
         {posts.map((p: PostType) => (
            <li style={{ borderBottom: "1px solid #eee" }} key={p.id}>
               <Link href={`/blog/${p.id}`}>{p.title}</Link>
            </li>
         ))}
      </ul>
   );
};
