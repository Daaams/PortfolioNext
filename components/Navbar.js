import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <h1>Damien</h1>
            </div>
            <div>
                <a className={styles.link}>Home</a>
                <a className={styles.link}>About me</a>
                <a className={styles.link}>Technologies</a>
                <a className={styles.link}>Projects</a>
                <a className={styles.link}>Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;