import Link from 'next/link';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';

function Footer() {
    return (
        <footer className="flex justify-between py-8 bg-[#2541B2] border-t border-t-[#eaeaea] text-white">
            <div className='lg:text-2xl w-[20%]'>
                &#169; Copyright 2023
            </div>
            <div>
                <Link href='https://github.com/Daaams'>
                    <a target="_blank" className=" w-[20%] underline flex flex-col items-center transition-colors ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] lg:text-2xl"><IconBrandGithub></IconBrandGithub><p className='underline'>Github</p></a>
                </Link>
            </div>
            <div>
                <Link href='https://www.linkedin.com/in/damien-levrault-7705a6234/'>
                    <a target="_blank" className="w-[20%] underline flex flex-col items-center transition-colors ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] lg:text-2xl"><IconBrandLinkedin></IconBrandLinkedin><p className='underline'>LinkedIn</p></a>
                </Link>
            </div>
            <div className='lg:text-2xl w-[20%]'>
                Powered by Damien LEVRAULT
            </div>
        </footer>
    );
}

export default Footer;