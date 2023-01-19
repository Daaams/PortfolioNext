import Image from 'next/image'
import Link from 'next/link'

import stylesLink from '../../styles/linksStyle.module.css'

import technos from './technologies.json'

function Technologies() {
    const path = "/technologies/"
    return (
        <div>
            <section id='technos' className="md:px-24" >
                <h1 className='text-3xl md:text-6xl text-[#2541B2] ml-10 '>Technologies</h1>
                <h2 className='mt-3 mx-5 md:text-2xl'>
                    Here are technologies I am used to work with !
                </h2>
                <div className="flex flex-wrap justify-around">
                    {
                        technos.technos.map((techno, i) => (
                            <article className="border-[4px] border-[#2541B2] bg-white p-[2%] m-[2%] rounded-2xl" key={i}>
                                <h1 className='text-3xl p-3 text-[#2541B2]'>{techno.title}</h1>
                                <figure className='pt-2'>
                                    <Image src={techno.imageURL} width={200} height={170} alt= {techno.title.concat(" logo")} />
                                </figure>
                                <br></br>
                                <Link
                                    href="/technologies/[idTechnology]"
                                    as={path.concat(i+1)}
                                >
                                    <a className={stylesLink.linkBlack}>Projects</a>
                                </Link>
                                <br></br>
                                <Link href={techno.URL}>
                                    <a className={stylesLink.linkBlack} >See documentation</a>
                                </Link>
                            </article>
                        )
                        )
                    }
                </div>
            </section>
        </div>
    );
}

export default Technologies;