import {Navbar} from "@material-tailwind/react/components/Navbar";
import {Collapse} from "@material-tailwind/react/components/Collapse";
import {DarkModeSwitcher} from "@components/DarkModeSwitcher/DarkModeSwitcher.tsx";
import {useEffect, useState} from "react";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go"
import {HiMenuAlt3} from "react-icons/hi"
import {Link, useLocation, useNavigate} from "react-router-dom";
import { flushSync } from "react-dom";

export const Header = () => {
    const location = useLocation();
    const [openNav, setOpenNav] = useState(false)
    const toggleOpen = () => setOpenNav(cur => !cur);
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const navigate = useNavigate();
    const viewNavigate = (newRoute: string) => {
        if (!document.startViewTransition) {
            return navigate(newRoute);
        } else {
            return document.startViewTransition(() => {
                flushSync(() => {
                    navigate(newRoute);
                });
            });
        }
    };

    const navList = (
        <>
            <ul className="justify-end mr-3 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  dark:text-white h-[100%]" aria-label="links-pages-container">
                <li className="inline-block mx-1 transition duration-300">
                    <button 
                        id="home" 
                        className={`w-[100%] hover:border-b-2 block p-2 ${!location.pathname.includes("blog") 
                            && !location.pathname.includes("projects") 
                            && !location.pathname.includes("about") ? "lg:dark:border-b-white lg:border-b-2 lg:border-b-gray-800" : ""}`}
                        onClick={() => viewNavigate("/")}
                        >Inicio
                    </button>
                </li>
                <li className="inline-block mx-1 transition duration-300">
                    <button 
                        id="about" 
                        className={`w-[100%] hover:border-b-2 block p-2 ${location.pathname.includes("about") ? "lg:dark:border-b-white lg:border-b-2 lg:border-b-gray-800" : ""}`}
                        onClick={() => viewNavigate("/about")}
                        >Sobre mi
                    </button>
                </li>
                <li className="inline-block mx-1 transition duration-300">
                    <button 
                        id="projects" 
                        className={`w-[100%] hover:border-b-2 block p-2 ${location.pathname.includes("projects") ? "lg:dark:border-b-white lg:border-b-2 lg:border-b-gray-800" : ""}`}
                        onClick={() => viewNavigate("/projects")}
                        >Proyectos
                    </button>
                </li>
                <li className="inline-block mx-1 transition duration-300">
                    <button
                        id="blog"
                        className={`w-[100%] hover:border-b-2 block p-2 ${location.pathname.includes("blog") ? "lg:dark:border-b-white lg:border-b-2 lg:border-b-gray-800" : ""}`}
                        onClick={() => viewNavigate("/blog")}
                        >Blog
                    </button>
                </li>
                <li className="lg:block hidden">
                    <a href="/RobertoDelPinoCurriculum.pdf" target="_blank" className="text-sm transition duration-300 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded dark:bg-gray-200 dark:hover:bg-gray-400 dark:text-gray-800">Descargar CV</a>
                </li>
                <li>
                    <ul className="flex ">
                        <li className="text-2xl mr-3 transition duration-300"><a aria-label="Link hacia mi LinkedIn page" className="p-2 h-[50px] flex items-center rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" href="https://www.linkedin.com/in/robertodelpinohormiga/" target="_blank"> < BsLinkedin /> </a></li>
                        <li className="text-2xl mr-3 transition duration-300"><a aria-label="Link hacia mi Github page" className="p-2 h-[50px] flex items-center rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" href="https://github.com/RobertoDelPino" target="_blank"> < BsGithub /> </a></li>
                        <li className="text-2xl mr-3 transition duration-300"><a aria-label="Link hacia mi instagram page" className="p-2 h-[50px] flex items-center rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" href="https://www.instagram.com/roberto.ph03/" target="_blank"> <BsInstagram/> </a></li>
                        <li className="text-2xl transition duration-300"><a aria-label="¿Deseas enviarme un correo electrónico? Pulsa aquí" className="p-2 h-[50px] flex items-center rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" href="mailto:robertodelpino11@gmail.com" target="_blank"> <GoMail /> </a></li>
                    </ul>
                </li>
            </ul>
        </>
    )

    return (
        <>
             <Navbar className={`border-0 text-current mx-auto max-w-screen-xl min-h-[64px] py-0
                ${isSticky ? "sticky top-0 z-50 dark:bg-gray-900 rounded-b-md rounded-t-none bg-gray-200" : " bg-white rounded-md dark:bg-gray-800"} 
                transition-colors duration-500 border-b-2 border-gray-300 dark:border-gray-700 w-full px-0
            `} >

                <section className="py-3 w-full flex flex-wrap content-center justify-around">
                    <h1 className="leading-10 dark:text-white text-xl font-bold w-[70%] lg:w-[10%] flex items-center pl-3 lg:pl-0">
                        <Link 
                            className="transition duration-500 hover:scale-[1.1]"
                            to="/">roberto.ph</Link>
                    </h1>
                    <div className="flex justify-end w-[30%] lg:w-[87%]">
                        <div className="hidden lg:block w-[90%]">{navList}</div>
                        <DarkModeSwitcher/>
                        <button onClick={toggleOpen} className="lg:hidden mr-3" aria-label="Toggle header list button">
                            <HiMenuAlt3 role="graphics-document" className="dark:text-white"></HiMenuAlt3>
                        </button>
                    </div>
                    <Collapse open={openNav} className="hidden w-[100%]">
                        <div className="lg:hidden">
                            {openNav && navList}
                        </div>
                    </Collapse>
                </section>
            </Navbar>
        </>
    );
};
