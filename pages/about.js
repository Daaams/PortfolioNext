import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/About.module.css'
import stylesLink from '../styles/linksStyle.module.css'

function About() {
    return (
        <div className={styles.contentAbout} id='about'>
            <Head>
                <title>Portfolio | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section>
                <h1>About</h1>
                <div className={styles.sections}>
                    Occaecat ex id ullamco ut cillum qui non. Non eu et id aliqua amet nostrud consectetur elit 
                    nostrud do cupidatat adipisicing. Sint ut magna sunt ipsum labore. Ad amet id irure adipisicing 
                    eiusmod ipsum culpa enim non labore. Nostrud quis ad laborum eiusmod proident nostrud excepteur.
                </div>
            </section>
            
        </div>
    );
}

export default About;