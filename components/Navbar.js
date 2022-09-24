import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <h1>Damien</h1>
            </div>
            <div>
                <a>Home</a>
                <a>About me</a>
                <a>Technologies</a>
                <a>Projects</a>
                <a>Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;