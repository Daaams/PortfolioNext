import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import linkStyles from '../styles/linksStyle.module.css'

import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';

import React from "react";

/*
 * 
 *    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

      <Typewriter
                onInit={(typewriter) => {typewriter.changeDeleteSpeed(300).typeString('I am a French IT student interseted in Web and Mobile apilcations.').changeDeleteSpeed(100).deleteChars(10).typeString('plications.').start();}}
               />

 */

export default function Home() {

  return (
    <div>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="description" content="Portfolio created by LEVRAULT Damien" />
        <link rel="icon" href="/favicon.ico" />
        <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
        <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />

      </Head>

      <section id='home'>
        <div className={styles.me}>

          <figure className={styles.myPicture}>
            <Image src={"/moi2.png"} width={600} height={550} alt="my picture" style={{ borderRadius: "50px" }} />
          </figure>
          <div className={styles.myDesc}>


            <p className={styles.title} >
              I'm Damien
            </p>
            <div className={styles.cache}></div>
            <p className={styles.desc}>
              I am a French IT student interseted in Web and Mobile applications.
            </p>
            <div className={styles.social}>
                <Link href='https://github.com/Daaams'>
                    <a className={linkStyles.linkIconBlack}><IconBrandGithub></IconBrandGithub>Github</a>
                </Link>
                <Link href='https://www.linkedin.com/in/damien-levrault-7705a6234/'>
                    <a className={linkStyles.linkIconBlack}><IconBrandLinkedin></IconBrandLinkedin>LinkedIn</a>
                </Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
