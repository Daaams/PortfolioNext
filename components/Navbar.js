import { useEffect, useState } from "react";

import styles from '../styles/Navbar.module.css'
import stylesLink from '../styles/linksStyle.module.css'
import Link from 'next/link'

function Navbar() {

  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 400;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 35 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 4;
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <nav
      style={{
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
      className={styles.navbar}

    >
      <div>
        <div className={styles.logo}>

        </div>
        <div className={styles.items}>
          <Link href={"/"}><a className={stylesLink.link}>Home</a></Link>
          <Link href={"/about"}><a className={stylesLink.link}>About</a></Link>
          <Link href={"#technos"}><a className={stylesLink.link}>Technologies</a></Link>
          <Link href={"#projects"}><a className={stylesLink.link}>Projects</a></Link>
          <Link href={"/contact"}><a className={stylesLink.link}>Contact</a></Link>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;