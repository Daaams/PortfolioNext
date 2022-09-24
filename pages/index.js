import Head from 'next/head'
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
        <h1 className={styles.title}>
          Hi, I'm Damien
        </h1>
      </main>
    </div>
  )
}
