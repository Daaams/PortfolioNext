import projects from '../projects/myProjects.json'
import technologies from './technologies.json'

import linkstyle from '../../styles/linksStyle.module.css'

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
            techno : technologies.technos[id-1]
        }
    }
  }

export default function ProjectsFromTechno( {techno} ) {
    const path = "/projects/"

    return (
        <div className='pt-[20%] lg:pt-[15%]'>
            <h1 className='text-3xl lg:text-6xl text-[#2541B2] ml-10 mb-20'>Here are my projects that use {techno.title} technology </h1>  
            <div className="bg-[#2541B2] rounded-xl p-6 m-10">
                {projects.projects.map((project, i) => (
                    project.technologies.includes(techno.id) &&
                        <Link
                            href="/projects/[id]"
                            as={path.concat(project.id)}
                            key={i}
                        >  
                            <a className="bg-white rounded-lg block px-1 py-4 lg:px-4 mx-[5%] my-3 hover:transition-all ease-in-out duration-500  hover:text-xl lg:text-2xl lg:hover:text-5xl hover:text-[#65AFFF] hover:font-bold" >
                                <div className="flex justify-between">
                                    <h3 className='w-[40%]'>{project.title}</h3>
                                    <h3 className='w-[60%] text-right'>{project.Date}</h3>
                                </div>
                            </a>
                        </Link>
                    ))
                }
            </div>

            <div className='m-[10%] lg:m-[5%] text-right text-xl lg:text-3xl'>
                <Link href="/#technos">
                    <a className={linkstyle.linkBlack}>Back to technologies</a>
                </Link>
            </div>
        </div>
    );
}

