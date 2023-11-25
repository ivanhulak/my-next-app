'use client';

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { NavItem } from "./Header";

type Props = {
   navItems: NavItem[]
}

export const Navigation = ({ navItems }: Props) => {
   const pathname = usePathname()

   return (
      <nav className={styles.header__nav}>
         {navItems.map((item: NavItem) => (
            <Link 
               key={item.label} 
               href={item.href}
               className={`${styles.navlink} ${pathname === item.href ? styles.active : ''}`}
            >{item.label}</Link>
         ))}
      </nav>
   )
}