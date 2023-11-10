import Link from 'next/link'
import React from 'react'

async function fetchPosts(){
  const response = await fetch('https://jsonplaceholder.org/posts', {
    next: {
      revalidate: 60
    }
  })
  return response.json()
}

export default async function Blog(){

  const posts = await fetchPosts()

  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}