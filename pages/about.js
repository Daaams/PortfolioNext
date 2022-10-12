import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/About.module.css'
import stylesLink from '../styles/linksStyle.module.css'

function about() {
    return (
        <div className={styles.contentAbout}>
            <Head>
                <title>Portfolio | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Why not knowing more about me ?</h1>
                <div className={styles.sections}>
                    <section className={styles.desc}>
                        <p>lorem</p>
                        <figure>
                            <Image src={"/moi.jpg"} width ={300} height={350} alt="my picture"/>
                        </figure>
                    </section>
                    <section className={styles.studies}>
                        <figure>
                            <Image src={"/iut.jpg"} width ={400} height={350} alt="iut of Bordeaux"/>
                        </figure>
                        <p>lorem</p>
                    </section>
                    <section className={styles.activities}>
                        <figure>
                            <Image src={"/squash.jpg"} width ={300} height={350} alt="squash sport"/>
                        </figure>
                        <p><Link href={'https://en.wikipedia.org/wiki/Squash_(sport)'}><a className={stylesLink.link}>See the rules</a></Link></p>
                        <figure>
                            <Image src={"/moi.jpg"} width ={300} height={350} alt="my picture" className={styles.myPicture}/>
                        </figure>
                    </section>
                </div>
            </main>
            
        </div>
    );
}

export default about;