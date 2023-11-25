import styles from './footer.module.css'

export default function Footer (){
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            <div className={styles.footer__body}>
               <p className={styles.footer__text}>Made by Ivan Hulak</p>
            </div>
         </div>
      </footer>
   )
}