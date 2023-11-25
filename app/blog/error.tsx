'use client';

export default function Error({ error }: {error: Error}) {
   return (
      <h1>
         Ups! {error.message}
      </h1>
   )
}