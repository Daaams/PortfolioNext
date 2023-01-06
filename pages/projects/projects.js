import projects from './myProjects.json'
import Link from 'next/link';

import style from '../../styles/Projects.module.css'


    export default function Projects () {
        const path = "/projects/"
        return (
            <div>
                <section id="projects" className={style.projects}>
                    <h1>My projects</h1>
                    <div>
                        {projects.projects.map((project, i) =>(
                            <div key={i}>
                                <div>
                                    <Link 
                                    href="/projects/[id]"
                                    as= {path.concat(project.id)} >
                                        <a className={style.single} ><h3>{project.title}</h3></a>
                                    </Link>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </section>
            </div>
            );
        }