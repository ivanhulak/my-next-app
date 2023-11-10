import { Metadata } from "next";

type Props = {
   params: { id: string };
};

export async function generateMetadata({
   params: { id },
}: Props): Promise<Metadata> {
   const post = await fetchPost(id);

   return {
      title: post.slug,
   };
}

async function fetchPost(id: string) {
   const response = await fetch(`https://jsonplaceholder.org/posts/${id}`, {
      next: {
         revalidate: 60,
      },
   });
   return response.json();
}

export default async function Post({ params: { id } }: Props) {
   const post = await fetchPost(id);

   return (
      <>
         <h1>Post Page {id}</h1>
         <div>{post.title}</div>
         <hr />
         <div>{post.content}</div>
      </>
   );
}
