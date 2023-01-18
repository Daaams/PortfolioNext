import Image from 'next/image'
import Link from 'next/link'


import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';

import React from "react";

export default function Home() {

  return (
    <div>
      <section id='home'>
        <div className="flex flex-col-reverse md:flex-row mb-32 my-32 md:mb-[15vh] mx-[7%] md:mt-[7%]">
          <figure className=" mt-12 md:mt-0 md:block">
            <Image src={"/moi2.PNG"} width={600} height={550} alt="my picture" style={{ borderRadius: "50px"}} />
          </figure>
          <div className="flex flex-1 flex-col">
            <p className="uppercase mb-6 font-extrabold text-6xl md:text-9xl text-[#2541B2]" >
              I&apos;m Damien
            </p>
            <p className="text-lg md:text-4xl mb-6 text-[#65AFFF]">
              I am a French IT student interseted in Web and Mobile applications.
            </p>
            <div className="w-full mb:w-1/2 m-auto flex justify-around">
                <Link href='https://github.com/Daaams'>
                    <a className=" underline flex flex-col items-center transition-colors ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] md:text-2xl"><IconBrandGithub></IconBrandGithub>Github</a>
                </Link>
                <Link href='https://www.linkedin.com/in/damien-levrault-7705a6234/'>
                    <a className="underline flex flex-col items-center transition-colors ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] md:text-2xl"><IconBrandLinkedin></IconBrandLinkedin>LinkedIn</a>
                </Link>
            </div>  
          </div>
        </div>

      </section>
    </div>
  )
}
