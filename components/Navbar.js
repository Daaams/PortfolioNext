import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <Link href={"/"}><a className={styles.link}>Home</a></Link>
                <Link href={"/about"}><a className={styles.link}>About me</a></Link>
                <Link href={"/technologies"}><a className={styles.link}>Technologies</a></Link>
                <Link href={"/projects"}><a className={styles.link}>Projects</a></Link>
                <Link href={"/contact"}><a className={styles.link}>Contact</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;