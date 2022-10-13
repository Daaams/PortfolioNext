import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                &#169; Copyright
            </div>
            <div>
                Powered by Damien LEVRAULT
            </div>
        </footer>
    );
}

export default Footer;