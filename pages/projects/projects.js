import projects from './myProjects.json'
import Link from 'next/link';

    export default function Projects () {
        const path = "/projects/"
        return (
            <div>
                <section id="projects" className="lg:px-24">
                    <div className="bg-[#2541B2] rounded-xl p-6 m-5 lg:m-0">
                        <h1 className='text-3xl lg:text-6xl text-[#65AFFF] ml-10'>My projects</h1>
                        <div className='mt-14'>
                            {projects.projects.map((project, i) =>(
                                <div key={i}>
                                    <div>
                                        <Link 
                                        href="/projects/[id]"
                                        as= {path.concat(project.id)} 
                                        
                                        >
                                            <a className="bg-white rounded-lg block px-1 py-4 lg:px-4 mx-[5%] my-3 hover:transition-all ease-in-out duration-500  hover:text-xl lg:text-2xl lg:hover:text-5xl hover:text-[#65AFFF] hover:font-bold" >
                                                <div className="flex justify-between">
                                                    <h3 className='w-[40%]'>{project.title}</h3>
                                                    <h3 className='w-[60%] text-right'>{project.Date}</h3>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>
            );
        }