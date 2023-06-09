import {Navbar} from "@material-tailwind/react/components/Navbar";
import {Collapse} from "@material-tailwind/react/components/Collapse";
import {DarkModeSwitcher} from "@components/DarkModeSwitcher/DarkModeSwitcher.tsx";
import {useState} from "react";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go"
import {HiMenuAlt3} from "react-icons/hi"
import {Link} from "react-router-dom";

export const Header = () => {

    const [openNav, setOpenNav] = useState(false)
    const toggleOpen = () => setOpenNav(cur => !cur);

    // Para añadir en un futuro
    /*<li className="inline-block mx-1 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><Link to="#">Blog</Link></li>
                <li className="inline-block mx-1 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><Link to="#">Contacto</Link></li>*/
    
    const navList = (
        <>
            <ul className="justify-end mr-3 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  dark:text-white h-[100%]" role="list" aria-label="links-pages-container">
                <li className="inline-block mx-1 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><Link to="/">Inicio</Link></li>
                <li className="inline-block mx-1 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><Link to="/about">Sobre mi</Link></li>
                <li className="inline-block mx-1 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><Link to="/projects">Proyectos</Link></li>
                <ul className="flex ">
                    <li className="text-2xl p-1 mr-3 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600"><a href="https://www.linkedin.com/in/robertodelpinohormiga/" target="_blank"> < BsLinkedin /> </a></li>
                    <li className="text-2xl p-1 mr-3 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600"><a href="https://github.com/RobertoDelPino" target="_blank"> < BsGithub /> </a></li>
                    <li className="text-2xl p-1 mr-3 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600"><a href="https://www.instagram.com/roberto.ph03/" target="_blank"> <BsInstagram/> </a></li>
                    <li className="text-2xl p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600"><a href="mailto:robertodelpino11@gmail.com" target="_blank"> <GoMail /> </a></li>
                </ul>
            </ul>
        </>
    )

    return (
        <>
            <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 dark:bg-gray-800 flex flex-wrap content-center justify-between rounded-md" >

                <h2 className="inline-block leading-10 dark:text-white text-xl font-bold w-[70%] lg:w-[25%]"><Link to="/">roberto.ph</Link></h2>
                <div className="flex justify-end w-[30%] lg:w-[75%]">
                    <div className="hidden lg:block w-[90%]">{navList}</div>
                    <DarkModeSwitcher/>
                    <button onClick={toggleOpen} className="lg:hidden">
                        <HiMenuAlt3 role="graphics-document" className="dark:text-white"></HiMenuAlt3>
                    </button>
                </div>
                <Collapse open={openNav} className="hidden w-[100%]">
                    <div className="lg:hidden">
                        {openNav && navList}
                    </div>
                </Collapse>
            </Navbar>
            <hr className="max-w-screen-xl m-auto"/>
        </>
    );
};
