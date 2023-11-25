import { NextResponse } from "next/server";

export async function GET(req: Request){
   const API_KEY = process.env.OMD_SECRET
   const query = 'matrix'
   const movies = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then(res => res.json())
   return NextResponse.json({ movies })
}