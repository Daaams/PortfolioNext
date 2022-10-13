import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Technologies.module.css'

function technologies() {
    return (
        <div>
            <Head>
                <title>Portfolio | Technologies </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 style={{margin: "5rem 0rem"}}>
                    Here are some technologies I use to work with !
                </h1>
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
                    <article >
                        <div className={styles.techno}>
                            <figure className={styles.imgTechno}>
                                <Image src={"/java.png"} width ={250} height={200} alt="java logo"/>
                            </figure>
                            <Link href={"https://www.java.com/en/"}>
                                <a className={styles.technoText}>Java</a>
                            </Link>
                        </div>
                    </article>    
                    <article >
                        <div className={styles.techno}>
                            <figure className={styles.imgTechno}>
                                <Image src={"/vmware2.png"} width ={180} height={180} alt="VMware logo"/>
                            </figure>
                            <Link href={"https://www.vmware.com/"}>
                                <a className={styles.technoText}>VMware</a>
                            </Link>
                        </div>
                    </article>    
                    <article >
                        <div className={styles.techno}>
                            <figure className={styles.imgTechno}>
                                <Image src={"/sqlServer.png"} width ={200} height={200} alt="SQL Server logo"/>
                            </figure>
                            <Link href={"https://www.microsoft.com/en-us/sql-server/"}>
                                <a className={styles.technoText}>SQL Server</a>
                            </Link>
                        </div>
                    </article>  
                    <article >
                        <div className={styles.techno}>
                            <figure className={styles.imgTechno}>
                                <Image src={"/Next.js.png"} width ={220} height={170} alt="NextJs logo"/>
                            </figure>
                            <Link href={"https://nextjs.org/"}>
                                <a className={styles.technoText}>NextJs</a>
                            </Link>
                        </div>
                    </article> 
                    <article >
                        <div className={styles.techno}>
                            <figure className={styles.imgTechno}>
                                <Image src={"/Csharp.png"} width ={200} height={200} alt="C# logo"/>
                            </figure>
                            <Link href={"https://learn.microsoft.com/en-us/dotnet/csharp/"}>
                                <a className={styles.technoText}>C#</a>
                            </Link>
                        </div>
                    </article>  
                </div>
            </main>
        </div>
    );
}

export default technologies;