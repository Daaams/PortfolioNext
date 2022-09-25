import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Portfolio created by LEVRAULT Damien" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>Hi there ! I'm Damien</p>
        <figure className={styles.me}>
          <Image src={"/moi.jpg"} width ={300} height={350} alt="my picture" className={styles.myPicture}/>
        </figure>
        <div className={styles.myDesc}>
          <p>
            I am an IT student interested in web and mobile applications. I would like to make people's everyday life easier. 
          </p>
          <button className={styles.downloadCV}>
            Download my CV
          </button>
        </div>
      </main>
    </div>
  )
}
