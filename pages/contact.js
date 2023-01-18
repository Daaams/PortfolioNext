import Link from 'next/link';
import { IconMail } from '@tabler/icons';


function Contact() {
    return (
        <div>
            <section id="contact" className="md:px-24 pb-20 md:pb-40">
                <h1 className='text-3xl md:text-6xl text-[#2541B2] ml-10 md:mb-10'>Contact</h1>
                <div className='w-[50%] md:w-[20%] m-auto'>
                    <Link href="mailto: damienlevrault@gmail.com">
                        <a className=" underline flex flex-col items-center transition-colors ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] md:text-2xl"><IconMail></IconMail><p>Shoot me an email here</p></a>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Contact;