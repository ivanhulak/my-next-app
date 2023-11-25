"use client";
import { getPostsBySearch } from "@/services/getPosts";
import React from "react";

type Props = {
   onSearch: (value: any[]) => void
}

export const PostSearch = ({ onSearch }: Props) => {
   const [search, setSearch] = React.useState('');

   const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
   }

   const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault()

      const posts = await getPostsBySearch(search)

      onSearch(posts)
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
