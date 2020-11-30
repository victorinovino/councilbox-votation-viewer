/*Esto es un componente de los datos que se muestran*/

import { Brightness1, Brightness6Rounded } from '@material-ui/icons';
import Head from 'next/head';
import styles from './Layout.module.css';



const Layout = ({ children, title = "Resultado Votaciones" }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className = {styles.header}>
        <svg width="300" height="28" fill="none" viewBox="0 0 320 28" xmlns="http://www.w3.org/2000/svg">
          <text className = {styles.resultado} x="30" y="20" width="7.33333" height="4.4" fill="#B9C9D1">Resultado</text>
          <text className = {styles.votaciones} x="160" y="20" width="7.33333" height="4.4" fill="#21B6B7">Votaciones</text>
          <rect y="15.7336" width="22" height="4.4" rx="2" fill="#21B6B7" />
          <rect y="9.86725" width="14.6667" height="4.4" rx="2" fill="#21B6B7" />
          <rect y="4" width="7.33333" height="4.4" rx="2" fill="#21B6B7" />
        </svg>
       
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Made by Victor Ocampo</footer>
    </div>
  )
}

export default Layout;