import Image from "next/image"
import Link from "next/link"
import projects from './myProjects.json'
import technologies from '../technologies/technologies.json'

import stylesLink from '../../styles/linksStyle.module.css'


export function getStaticPaths() {
    
    const paths  = projects.projects.map(project => {
        return {
            params: {id: project.id.toString()}
        } 
    })

    return {
      paths: paths, 
      fallback: false
    };
  }

  
export function getStaticProps(context) {

    const id = context.params.id;

    return {
        props: {
            idProjet : id
        }
    }
  }

  

export default function ProjectFromId( {idProjet} ) {


    var technosUsed = [];

    technologies.technos.map((tech) => (
        projects.projects.map((pro) => (
            pro.id == idProjet &&
            (technosUsed = pro.technologies) && (
                pro.technologies.includes(tech.id) && 
                pro.technologies.map((t, i) => (
                    t == tech.id && (technosUsed[i] = tech.title)
                ))
            )
        ))
    ))
    

    return (
        <div>
            <div className="pt-[15%] md:pt-[7%]">
            {projects.projects.map((project, i) => (
                project.id == idProjet &&
                <article className="m-[5%]" key={i}>
                    <div className="flex items-center justify-between mb-[5%]">
                        <h1 className='text-3xl md:text-6xl text-[#2541B2] ml-10 pb-[3%]'>{project.title}</h1>
                        <p className="text-right mr-10 text-sm md:text-3xl text-[#2541B2]">{project.Date}</p>
                    </div>
                    <div className="md:flex">
                        <figure className="mr-8">
                            <Image src={project.photo} width={1500} height={1100} alt={project.title.concat(" image project")} />
                        </figure>
                        <div className="bg-[#2541B2] p-9 rounded-xl w-full">
                            <p className="md:text-2xl mb-4 text-white">Description :</p>
                            <p className="text-sm md:text-xl mb-[5%] p-4 rounded-lg bg-[#65AFFF] text-white">{project.description}</p>
                            <div >
                                <div className="mb-4">
                                    <p className="md:text-2xl md:mr-4 md:mb-4 text-white">Project skills :</p>
                                    <ul className="flex flex-wrap">
                                        {project.points.map((point, i) => (
                                            <li className="m-2 md:mr-4 p-3 md:p-4 bg-[#65AFFF] text-white rounded-3xl text-sm md:text-xl flex items-center text-center" key={i}>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mb-4">
                                    <p className="md:text-2xl md:mr-4 md:mb-4 text-white">Technologies used in the project :</p>
                                    <ul className="flex flex-wrap">
                                        {
                                        technosUsed.map((technoTitle, i) => (
                                            <li className="m-2 md:mr-4 p-3 md:p-4 bg-[#65AFFF] text-white rounded-3xl text-sm md:text-xl flex items-center text-center" key={i}>
                                                {technoTitle}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {project.projectRepoURL != "" && 

                            <p className="mt-[5%] md:text-2xl text-white"> Project repository : 
                            <Link href={project.projectRepoURL}><a className="md:bg-transparent md:p-0 border-b border-b-white ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] md:text-2xl ml-5" aria-current="page">{project.projectRepoURL}</a></Link>
                            </p>
                            }
                            {
                            project.projectRepoURL == "" && 
                            <p className="mt-[5%] md:text-2xl text-white"> Project repository : No repository available</p>
                            }
                            
                        </div>
                    </div>
                    <br></br>
                </article>
            ))
            }
        </div>
            <div className="m-[10%] md:m-[5%] text-right text-3xl">
                <Link href="/">
                    <a className={stylesLink.linkBlack} onClick={() => router.back()} >Back</a>
                </Link>
            </div>
        </div>
        
    );
}
