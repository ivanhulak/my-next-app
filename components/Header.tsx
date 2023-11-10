import Link from "@/node_modules/next/link"

export const Header:React.FC = () => {
   return (
      <header className="header">
         <Link href='/about'>About</Link>
         <Link href='/'>Home</Link>
         <Link href='/blog'>Blog</Link>
      </header>
   )
}