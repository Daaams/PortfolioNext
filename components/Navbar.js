import styles from '../styles/Navbar.module.css'
import stylesLink from '../styles/linksStyle.module.css'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href={"/"}><a className={stylesLink.link}>Home</a></Link>
                <Link href={"/about"}><a className={stylesLink.link}>About me</a></Link>
                <Link href={"/technologies"}><a className={stylesLink.link}>Technologies</a></Link>
                <Link href={"/projects"}><a className={stylesLink.link}>Projects</a></Link>
                <Link href={"/contact"}><a className={stylesLink.link}>Contact</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;