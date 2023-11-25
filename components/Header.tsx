import styles from "./header.module.css";
import { Navigation } from "./Navigation";

export type NavItem = { 
   label: string;
   href: string | any;
}
const navItems: NavItem[] = [
   { label: 'Home', href: '/' },
   { label: 'Blog', href: '/blog' },
   { label: 'About', href: '/about' },
]

export default function Header() {
   return (
      <header className={styles.header}>
         <div className="container">
            <div className={styles.header__body}>
               <Navigation navItems={navItems}/> 
            </div>
         </div>
      </header>
   );
}
