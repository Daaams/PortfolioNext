import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

/*
 * 
 *    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
 */


export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Portfolio created by LEVRAULT Damien" />
        <link rel="icon" href="/favicon.ico" />
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>

      <main className={styles.main}>
        <div className={styles.me}>
          <div className={styles.myDesc}>
            <p className={styles.title}>I'm Damien</p>
            <p>I am an IT student interested in web and mobile applications. I would like to make people's everyday life easier. </p>      
          </div>
          <figure  className={styles.myPicture}>
            <Image src={"/moi2.png"} width ={600} height={550} alt="my picture"/>
          </figure>
        </div>
        <div className={styles.cv}>
          <p>Download my CV</p>
          <ion-icon name="arrow-forward-outline"></ion-icon>
          <ion-icon name="arrow-forward-outline"></ion-icon>
          <ion-icon name="arrow-forward-outline"></ion-icon>
          <p className={styles.downloadCV}>
            <button>HERE</button>
          </p>
        </div> 
      </main>
    </div>
  )
}
