import projects from '../projects/myProjects.json'
import technologies from './technologies.json'

import linkstyle from '../../styles/linksStyle.module.css'
import style from '../../styles/Projects.module.css'

import { useRouter } from "next/router"
import Link from 'next/link';

export default function ProjectsFromTechno() {
    const path = "/projects/"

    const router = useRouter()
    const {
        query: { technology },
    } = router

    return (

        <div style={{ margin: '20%' }}>
            {technologies.technos.map((techno, i) => (
                console.log(technology),
                techno.id == technology &&
                <h1 style={{ margin: '0% 0% 5% 0%' }} key={i}>Here are my projects that use {techno.title} technology </h1>
            ))}
            {projects.projects.map((project, i) => (
                project.technologies.includes(technology) &&
                    <Link
                        href="/projects/[id]"
                        as={path.concat(project.id)}
                        key={i}
                    >
                            <a className={style.single}><h3>{project.title}</h3></a>
                    </Link>
            ))
            }
            <div style={{ margin: '5%', textAlign: 'right', fontSize: '20px' }}>
                <Link href="/">
                    <a className={linkstyle.linkBlack} onClick={() => router.back()}>Back</a>
                </Link>
            </div>
        </div>
    );
}

