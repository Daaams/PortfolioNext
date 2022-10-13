import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Technologies.module.css'

function technologies() {
    return (
        <div>
            <Head>
                <title>Portfolio | Technologies</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.technologies}>
                    <article >
                        <div className={styles.techno}>
                            <figure className={styles.imgTechno}>
                                <Image src={"/python.png"} width ={200} height={200} alt="python logo"/>
                            </figure>
                            <Link href={"https://www.python.org/"}>
                                <a className={styles.technoText}>Python</a>
                            </Link>
                        </div>
                    </article>                   
                    
                </div>
            </main>
        </div>
    );
}

export default technologies;