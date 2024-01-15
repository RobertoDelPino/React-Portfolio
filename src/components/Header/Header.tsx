import {Navbar} from "@material-tailwind/react/components/Navbar";
import {Collapse} from "@material-tailwind/react/components/Collapse";
import {DarkModeSwitcher} from "@components/DarkModeSwitcher/DarkModeSwitcher.tsx";
import {useEffect, useState} from "react";
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go"
import {HiMenuAlt3} from "react-icons/hi"
import {Link, useLocation} from "react-router-dom";

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


    // useEffect(() => {
    //     document.getElementById("home").classList.remove("dark:bg-blue-800")
    //     document.getElementById("about").classList.remove("dark:bg-blue-800")
    //     document.getElementById("projects").classList.remove("dark:bg-blue-800")
    //     document.getElementById("blog").classList.remove("dark:bg-blue-800")

    //     if(location.pathname.includes("about")){
    //         document.getElementById("about").classList.add("dark:bg-blue-800")
    //         return;
    //     }
    //     if(location.pathname.includes("projects")){
    //         document.getElementById("projects").classList.add("dark:bg-blue-800")
    //         return;
    //     }
    //     if(location.pathname.includes("blog")){
    //         document.getElementById("blog").classList.add("dark:bg-blue-800")
    //         return;
    //     }

    //     document.getElementById("home").classList.add("dark:bg-blue-800")
    // }, [location]);

    const navList = (
        <>
            <ul className="justify-end mr-3 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  dark:text-white h-[100%]" aria-label="links-pages-container">
                <li className="inline-block mx-1 transition duration-300"><Link id="home" className="w-[100%] block p-2 rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" to="/">Inicio</Link></li>
                <li className="inline-block mx-1 transition duration-300"><Link id="about" className="w-[100%] block p-2 rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" to="/about">Sobre mi</Link></li>
                <li className="inline-block mx-1 transition duration-300"><Link id="projects" className="w-[100%] block p-2 rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" to="/projects">Proyectos</Link></li>
                <li className="inline-block mx-1 transition duration-300"><Link id="blog" className="w-[100%] block p-2 rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" to="/blog">Blog</Link></li>
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
                transition-colors duration-500 border-b-2 border-gray-300 dark:border-gray-700 w-full
            `} >

                <section className="py-3 w-full flex flex-wrap content-center justify-around">
                    <h1 className="leading-10 dark:text-white text-xl font-bold w-[70%] lg:w-[25%] flex items-center pl-3 lg:pl-0"><Link to="/">roberto.ph</Link></h1>
                    <div className="flex justify-end w-[30%] lg:w-[70%]">
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
