import styles from "./page.module.css";
import { Metadata } from "next";


export const metadata: Metadata = {
   title: "About | Next App",
   description: "All information about our company",
};


export default function About() {
   return (
      <>
         <div className="container">
            <h3 className={styles.about__title}>Select sub-item</h3>
         </div>
      </>
   );
}
