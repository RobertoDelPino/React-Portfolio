import {Navbar} from "@material-tailwind/react/components/Navbar";
import {Collapse} from "@material-tailwind/react/components/Collapse";
import {DarkModeSwitcher} from "@components/DarkModeSwitcher/DarkModeSwitcher.tsx";
import {useEffect, useState} from "react";
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go"
import {HiMenuAlt3} from "react-icons/hi"
import {useLocation} from "react-router-dom";
import NavigationButton from "@components/NavigationButton/NavigationButton";

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

    const navList = (
        <>
            <ul className="justify-end mr-3 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  dark:text-white h-[100%]" aria-label="links-pages-container">
                <li className="inline-block mx-1 transition duration-300">
                    <NavigationButton 
                        className={`w-[100%] hover:border-b-2 block p-2 ${!location.pathname.includes("blog") 
                            && !location.pathname.includes("projects") 
                            && !location.pathname.includes("about")
                            && !location.pathname.includes("contact") ? "lg:dark:border-b-white lg:border-b-2 lg:border-b-gray-800" : ""}`}
                        newRoute="/"
                        children={"Inicio"}
                        id="home" 
                    />

                </li>
                <li className="inline-block mx-1 transition duration-300">
                    <NavigationButton 
                        className={`w-[100%] hover:border-b-2 block p-2 ${location.pathname.includes("about") ? "lg:dark:border-b-white lg:border-b-2 lg:border-b-gray-800" : ""}`}
                        newRoute="/about"
                        children={"Sobre mi"}
                        id="about" 
                    />

                </li>
                <li className="inline-block mx-1 transition duration-300">
                    <NavigationButton 
                        className={`w-[100%] hover:border-b-2 block p-2 ${location.pathname.includes("projects") ? "lg:dark:border-b-white lg:border-b-2 lg:border-b-gray-800" : ""}`}
                        newRoute="/projects"
                        children={"Proyectos"}
                        id="projects" 
                    />

                </li>
                <li className="inline-block mx-1 transition duration-300">
                    <NavigationButton 
                        className={`w-[100%] hover:border-b-2 block p-2 ${location.pathname.includes("blog") ? "lg:dark:border-b-white lg:border-b-2 lg:border-b-gray-800" : ""}`}
                        newRoute="/blog"
                        children={"Blog"}
                        id="blog" 
                    />
                </li>
                <li className="inline-block mx-1 transition duration-300">
                    <NavigationButton 
                        className={`w-[100%] hover:border-b-2 block p-2 ${location.pathname.includes("contact") ? "lg:dark:border-b-white lg:border-b-2 lg:border-b-gray-800" : ""}`}
                        newRoute="/contact"
                        children={"Contacto"}
                        id="contact"
                    />
                </li>
                <li className="lg:block hidden">
                    <a href="/RobertoDelPinoCurriculum.pdf" target="_blank" className="text-sm transition duration-300 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded dark:bg-gray-200 dark:hover:bg-gray-400 dark:text-gray-800">Descargar CV</a>
                </li>
                <li>
                    <ul className="flex justify-center">
                        <li className="text-2xl mr-3 transition duration-300"><a aria-label="Link hacia mi LinkedIn page" className="p-2 h-[50px] flex items-center rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" href="https://www.linkedin.com/in/robertodelpinohormiga/" target="_blank"> < BsLinkedin /> </a></li>
                        <li className="text-2xl mr-3 transition duration-300"><a aria-label="Link hacia mi Github page" className="p-2 h-[50px] flex items-center rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" href="https://github.com/RobertoDelPino" target="_blank"> < BsGithub /> </a></li>
                        <li className="text-2xl transition duration-300"><a aria-label="¿Deseas enviarme un correo electrónico? Pulsa aquí" className="p-2 h-[50px] flex items-center rounded-md hover:bg-gray-800/[.1] dark:hover:bg-gray-600" href="mailto:robertodelpino11@gmail.com" target="_blank"> <GoMail /> </a></li>
                    </ul>
                </li>
            </ul>
        </>
    )

    return (
        <>
             <Navbar className={`border-0 text-current mx-auto max-w-screen-xl min-h-[64px] py-0
                ${isSticky ? "sticky top-0 z-50 dark:bg-gray-700/80 bg-gray-200/80" : " bg-white dark:bg-gray-800"} 
                transition-colors duration-500 border-b-2 border-gray-300 dark:border-gray-700 w-full px-0 shadow-lg backdrop-saturate-200 backdrop-blur-lg
            `} >

                <section className="py-3 w-full flex flex-wrap content-center justify-around">
                    <h1 className="leading-10 dark:text-white text-xl font-bold w-[70%] lg:w-[11%] flex items-center pl-3 lg:pl-0">
                        <NavigationButton 
                            className="transition duration-500 hover:scale-[1.1]"
                            newRoute="/"
                            children={"roberto.ph"}
                        />
                    </h1>
                    <div className="flex justify-end w-[30%] lg:w-[85%]">
                        <div className="hidden lg:block w-[95%]">{navList}</div>
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
