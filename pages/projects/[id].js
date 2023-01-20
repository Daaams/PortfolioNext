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
    }
  }

  
export function getStaticProps(context) {

    const id = context.params.id;

    return {
        props: {
            projectId : id
        }
    }
  }

  

export default function ProjectFromId( {projectId} ) {

    var theProject = {}
    var theProjectTechnos = []

    projects.projects.map((pro) => {
        if (pro.id == projectId) {
            theProject = pro 
            theProjectTechnos = [...pro['technologies']]          
        }
        }
    )

    theProjectTechnos.map((t, i) => {
        technologies.technos.map(tech => {
            console.log(t == tech.id)
            if (t == tech.id) {
                theProjectTechnos[i] = tech.title
                console.log(t)
            }
        })
    })

    console.log(projects)
    

    return (
        <div>
            <div className="pt-[15%] lg:pt-[7%]">
                {projects.projects.map((project, i) => (
                    project.id == projectId &&
                    <article className="m-[5%]" key={i}>
                        <div className="flex items-center justify-between mb-[5%]">
                            <h1 className='text-3xl lg:text-6xl text-[#2541B2] ml-10 pb-[3%]'>{project.title}</h1>
                            <p className="text-right mr-10 text-sm lg:text-3xl text-[#2541B2]">{project.Date}</p>
                        </div>
                        <div className="lg:flex">
                            <figure className="lg:mr-8">
                                <Image src={project.photo} width={1500} height={1100} alt={project.title.concat(" image project")} />
                            </figure>
                            <div className="bg-[#2541B2] p-9 rounded-xl w-full">
                                <p className="lg:text-2xl mb-4 text-white">Description :</p>
                                <p className="text-sm lg:text-xl mb-[5%] p-4 rounded-lg bg-[#65AFFF] text-white">{project.description}</p>
                                <div >
                                    <div className="mb-4">
                                        <p className="lg:text-2xl lg:mr-4 lg:mb-4 text-white">Project skills :</p>
                                        <ul className="flex flex-wrap">
                                            {project.points.map((point, i) => (
                                                <li className="m-2 lg:mr-4 p-3 lg:p-4 bg-[#65AFFF] text-white rounded-3xl text-sm lg:text-xl flex items-center text-center" key={i}>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <p className="lg:text-2xl lg:mr-4 lg:mb-4 text-white">Technologies used in the project :</p>
                                        <ul className="flex flex-wrap">
                                            {
                                            theProjectTechnos.map((technoTitle, i) => (
                                                <li className="m-2 lg:mr-4 p-3 lg:p-4 bg-[#65AFFF] text-white rounded-3xl text-sm lg:text-xl flex items-center text-center" key={i}>
                                                    {technoTitle}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                {project.projectRepoURL != "" && 

                                <p className="mt-[5%] lg:text-2xl text-white"> Project repository : 
                                <Link href={project.projectRepoURL}><a className="lg:bg-transparent lg:p-0 border-b border-b-white ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] lg:text-2xl ml-5" aria-current="page">{project.projectRepoURL}</a></Link>
                                </p>
                                }
                                {
                                project.projectRepoURL == "" && 
                                <p className="mt-[5%] lg:text-2xl text-white"> Project repository : No repository available</p>
                                }
                                
                            </div>
                        </div>
                        <br></br>
                    </article>
                ))
                }
            </div>
            <div className="m-[10%] lg:m-[5%] text-right text-xl lg:text-3xl">
                <Link href="/#technos">
                    <a className={stylesLink.linkBlack} >Back to technologies</a>
                </Link>
            </div>
        </div>
        
    );
}
