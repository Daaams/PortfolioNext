import styles from '../styles/Footer.module.css'
import linkStyles from '../styles/linksStyle.module.css'
import Link from 'next/link';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                &#169; Copyright
            </div>
            <div>
                <Link href='https://github.com/Daaams'>
                    <a className={linkStyles.linkIcon}><IconBrandGithub></IconBrandGithub><p>Github</p></a>
                </Link>
                <Link href='https://www.linkedin.com/in/damien-levrault-7705a6234/'>
                    <a className={linkStyles.linkIcon}><IconBrandLinkedin></IconBrandLinkedin><p>LinkedIn</p></a>
                </Link>
            </div>
            <div>
                Powered by Damien LEVRAULT
            </div>
        </footer>
    );
}

export default Footer;