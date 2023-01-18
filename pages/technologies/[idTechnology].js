import projects from '../projects/myProjects.json'
import technologies from './technologies.json'

import linkstyle from '../../styles/linksStyle.module.css'

import { useRouter } from "next/router"
import Link from 'next/link';


export function getStaticPaths() {
    
    const paths  = technologies.technos.map(techno => {
        return {
            params: {idTechnology: techno.id.toString()}
        } 
    })

    return {
      paths: paths, 
      fallback: false
    };
  }

  
export function getStaticProps(context) {

    const id = context.params.idTechnology;

    return {
        props: {
            idTechno : id
        }
    }
  }

export default function ProjectsFromTechno( {idTechno} ) {
    const path = "/projects/"

    return (

        <div className='pt-[20%] md:pt-[15%]'>
            {technologies.technos.map((techno, i) => (
                techno.id == idTechno &&
                <h1 className='text-3xl md:text-6xl text-[#2541B2] ml-10 mb-20' key={i}>Here are my projects that use {techno.title} technology </h1>
            ))}
            <div className="bg-[#2541B2] rounded-xl p-6 m-10">
                {projects.projects.map((project, i) => (
                    project.technologies.includes(idTechno) &&
                        <Link
                            href="/projects/[id]"
                            as={path.concat(project.id)}
                            key={i}
                        >  
                            <a className="bg-white rounded-lg block px-1 py-4 md:px-4 mx-[5%] my-3 hover:transition-all ease-in-out duration-500  hover:text-xl md:text-2xl md:hover:text-5xl hover:text-[#65AFFF] hover:font-bold" >
                                <div className="flex justify-between">
                                    <h3 className='w-[40%]'>{project.title}</h3>
                                    <h3 className='w-[60%] text-right'>{project.Date}</h3>
                                </div>
                            </a>
                        </Link>
                    ))
                }
            </div>

            <div className='m-[10%] md:m-[5%] text-right text-3xl'>
                <Link href="/">
                    <a className={linkstyle.linkBlack} onClick={() => router.back()}>Back</a>
                </Link>
            </div>
        </div>
    );
}

