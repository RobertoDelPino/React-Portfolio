import {Collapse, Navbar} from "@material-tailwind/react";
import {DarkModeSwitcher} from "@components/DarkModeSwitcher/DarkModeSwitcher.tsx";
import {useState} from "react";
import {HiMenuAlt3} from "react-icons/all";

export const Header = () => {

    const [openNav, setOpenNav] = useState(false)
    const toggleOpen = () => setOpenNav(cur => !cur);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  dark:text-white h-[100%]" role="list" aria-label="links-pages-container">
            <li className="inline-block mx-2 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><a href="#">Inicio</a></li>
            <li className="inline-block mx-2 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><a href="#">Sobre mi</a></li>
            <li className="inline-block mx-2 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><a href="#">Projects</a></li>
            <li className="inline-block mx-2 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><a href="#">Blog</a></li>
            <li className="inline-block mx-2 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><a href="#">Contact</a></li>
        </ul>
    )

    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 dark:bg-gray-800 flex flex-wrap content-center justify-between" >

            <h2 className="inline-block leading-10 dark:text-white text-xl font-bold w-[50%]"><a className="" href="#">roberto.ph</a></h2>
            <div className="flex">
                <div className="hidden lg:block">{navList}</div>
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
    );
};