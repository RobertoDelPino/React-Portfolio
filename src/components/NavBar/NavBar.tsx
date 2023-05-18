import {HiMenuAlt3} from "react-icons/all";

export const NavBar = () => (
    <nav className="flex content-center flex-wrap mx-3">
        <ul className="hidden lg:block dark:text-white" role="list" aria-label="links-pages-container">
            <li className="inline-block mx-2 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><a href="#">Inicio</a></li>
            <li className="inline-block mx-2 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><a href="#">Sobre mi</a></li>
            <li className="inline-block mx-2 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><a href="#">Projects</a></li>
            <li className="inline-block mx-2 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><a href="#">Blog</a></li>
            <li className="inline-block mx-2 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600" role="link"><a href="#">Contact</a></li>
        </ul>
        <HiMenuAlt3 role="graphics-document" className="dark:text-white lg:hidden"></HiMenuAlt3>
    </nav>
)