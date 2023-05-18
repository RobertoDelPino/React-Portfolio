import {HiMenuAlt3} from "react-icons/all";

export const NavBar = () => (
    <nav className="flex content-center flex-wrap mx-3">
        <ul role="list" aria-label="links-pages-container">
            <li role="link"><a href="#">Inicio</a></li>
            <li role="link"><a href="#">Sobre mi</a></li>
            <li role="link"><a href="#">Projects</a></li>
            <li role="link"><a href="#">Blog</a></li>
            <li role="link"><a href="#">Contact</a></li>
        </ul>
        <HiMenuAlt3 role="graphics-document" className="dark:text-white lg:hidden"></HiMenuAlt3>
    </nav>
)