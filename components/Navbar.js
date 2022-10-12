import { useEffect, useState } from "react";

import styles from '../styles/Navbar.module.css'
import stylesLink from '../styles/linksStyle.module.css'
import Link from 'next/link'

function Navbar () {

    const [clientWindowHeight, setClientWindowHeight] = useState("");

    //const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
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
        //setBackgroundTransparacy(backgroundTransparacyVar);
        setPadding(paddingVar);
        setBoxShadow(boxShadowVar);
        //setHeight(100);
      }
    }, [clientWindowHeight]);

    return (
        <nav 
        style={{
            //background: `rgba(75, 75, 75, ${backgroundTransparacy})`,
            padding: `${padding}px 0px`,
            boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
          }}
        className={styles.navbar}
        
        >
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