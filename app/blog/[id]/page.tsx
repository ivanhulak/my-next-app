import { Metadata } from "next";
import { getPost } from '../../../services/getPosts'

type Props = {
   params: {
      id: number;
   };
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
   const post = await getPost(id)

   return {
      title: post.title.length > 20 ?  post.title.substring(0, 20) + '...' : post.title,
      description: post.body
   }
}

export default async function Post({ params: { id } }: Props) {
   const post = await getPost(id)

   return (
      <>
         <div className="container">
            <h2>post #{id}</h2>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
         </div>
      </>
   );
}
