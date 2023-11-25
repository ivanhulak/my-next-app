"use client";
import { getPostsBySearch } from "@/services/getPosts";
import React from "react";
import useSWR from "swr";

export const PostSearch = () => {
   const [search, setSearch] = React.useState('');
   const { mutate } = useSWR('posts')

   const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
   }

   const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault()
      const posts = await getPostsBySearch(search)
      mutate(posts)
   }

   return (
      <form onSubmit={handleSubmit}>
         <input 
            type="search" 
            placeholder="search" 
            value={search} 
            onChange={onInputChangeHandler}/>
         <button type="submit">Search</button>
      </form>
   );
};
