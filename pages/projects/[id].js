import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import projects from './myProjects.json'

import styles from '../../styles/Technologies.module.css'
import stylesLink from '../../styles/linksStyle.module.css'

export default function ProjectFromId() {

    const router = useRouter()
    const {
        query: { id },
    } = router

    return (
        <div>
            <div style={{ marginTop: '20%' }}>
            {projects.projects.map((project, i) => (

                project.id == id &&
                <article key={i}>
                    <h2>{project.title}</h2>
                    <figure>
                        <Image src={project.photo} width={200} height={150} alt={project.title.concat(" image project")} />
                    </figure>
                    <br></br>
                </article>
            ))
            }
        </div>
            <div style={{ margin: '5%', textAlign: 'right', fontSize: '20px'}}>
                <Link href="/">
                    <a className={stylesLink.linkBlack} onClick={() => router.back()} >Back</a>
                </Link>
            </div>
        </div>
        
    );
}
