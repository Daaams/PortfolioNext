import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/Technologies.module.css'
import stylesLink from '../../styles/linksStyle.module.css'

import technos from './technologies.json'

function Technologies() {
    const path = "/technologies/"
    return (
        <div>
            <Head>
                <title>Portfolio | Technologies </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section id='technos' className={styles.main}>
                <h1 style={{ margin: "5rem 0rem" }}>
                    Here are technologies I use to work with !
                </h1>
                <div className={styles.technos}>
                    {
                        technos.technos.map((techno, i) => (
                            <article className={styles.techno} key={i}>
                                <h2>{techno.title}</h2>
                                <figure>
                                    <Image src={techno.imageURL} width={200} height={150} alt= {techno.title.concat(" logo")} />
                                </figure>
                                <br></br>
                                <Link
                                    href="/technologies/[technology]"
                                    as={path.concat(i+1)}
                                >
                                    <a className={stylesLink.linkBlack}>Projects</a>
                                </Link>
                                <br></br>
                                <Link href={techno.URL}>
                                    <a className={stylesLink.linkBlack} >See documentation</a>
                                </Link>
                            </article>
                        )
                        )
                    }
                </div>
            </section>
        </div>
    );
}

export default Technologies;