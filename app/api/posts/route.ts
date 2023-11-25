import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req: Request){

   const { searchParams } = new URL(req.url)
   console.log('req.url: ', req.url)
   console.log('searchParams: ', searchParams)

   const query = searchParams.get('q')

   let currentPosts = posts
   if(query){
      currentPosts = posts.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
   }

   return NextResponse.json(currentPosts)
}

export async function POST(req: Request){
   const body = await req.json()

   console.log(body)
   return NextResponse.json(body)
}