import styles from './page.module.css'
import Link from "next/link";

export default function AboutLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="container">
         <h2 className={styles.title}>About us</h2>
         <ul>
            <li><Link href='/about/team'>Team</Link></li>
            <li><Link href='/about/contacts'>Contacts</Link></li>
         </ul>
         {children}
      </div>
   );
}
