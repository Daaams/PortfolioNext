import Link from 'next/link'
import Script from 'next/script'

function Navbar() {

  return (
    <>
      <nav className=" opacity-95 p-2 lg:p-6 mb-10 bg-[#2541B2] fixed top-0 w-full z-10">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href={"/"}>
            <a>
              <svg className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"></path><path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"></path><path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"></path></g><defs><clipPath id="clip0"><rect width="51" height="70" fill="white"></rect></clipPath></defs></svg>
            </a>
          </Link>
          <div className="flex sm:order-2">
            <button data-collapse-toggle="mobile-menu-3" type="button" className="lg:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="w-[80%] flex justify-end">
            <div className="hidden lg:flex justify-between items-center w-full lg:w-auto lg:order-1" id="mobile-menu-3">
              <ul className="flex-col lg:flex-row flex lg:space-x-8 mt-4 lg:mt-0 lg:text-sm lg:font-medium">
                <li className="m-2">
                  <Link href={"/"}><a className="lg:bg-transparent lg:p-0 text-white border-b border-b-white ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] text-lg lg:text-2xl">Home</a></Link>
                </li>
                <li className="m-2">
                  <Link href={"/#about"}><a className="lg:bg-transparent lg:p-0 text-white border-b border-b-white ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] text-lg lg:text-2xl" aria-current="page">About</a></Link>
                </li>
                <li className="m-2">
                  <Link href={"/#technos"}><a className="lg:bg-transparent lg:p-0 text-white border-b border-b-white ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] text-lg lg:text-2xl" aria-current="page">Technologies</a></Link>
                </li>
                <li className="m-2">
                  <Link href={"/#projects"}><a className="lg:bg-transparent lg:p-0 text-white border-b border-b-white ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] text-lg lg:text-2xl" aria-current="page">Projects</a></Link>
                </li>
                <li className="m-2">
                  <Link href={"/#contact"}><a className="lg:bg-transparent lg:p-0 text-white border-b border-b-white ease-in-out duration-200 hover:text-[#65AFFF] hover:border-b-[#65AFFF] text-lg lg:text-2xl" aria-current="page">Contact</a></Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js" />
    </>

  );
}

export default Navbar;