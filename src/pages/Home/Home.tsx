import personalPhoto from "../../assets/fotoPerfil-1.webp"
import {TechnologiesList, ITechnology} from "@components/TecnologiesList/TechnologiesList.tsx";
import javascript from "../../assets/TechIcons/javascript.webp"
import bootstrap from "../../assets/TechIcons/bootstrap.webp"
import css from "../../assets/TechIcons/css-3.webp"
import html from "../../assets/TechIcons/html-5.webp"
import github from "../../assets/TechIcons/github.webp"
import mysql from "../../assets/TechIcons/mysql.webp"
import react from "../../assets/TechIcons/react.webp"
import typescript from "../../assets/TechIcons/typescript.webp"
import visualStudio from "../../assets/TechIcons/visual-studio.webp"
import visualStudioCode from "../../assets/TechIcons/vscode.webp"
import webstorm from "../../assets/TechIcons/webstorm.webp"
import netCore from "../../assets/TechIcons/netcore.webp"
import tailwind from "../../assets/TechIcons/tailwind.webp"

export const Home = () => {

    const techList: ITechnology[] = [
        {
            name: "HTML",
            image: html
        },
        {
            name: "CSS",
            image: css
        },
        {
            name: "Javascript",
            image: javascript
        },
        {
            name: "Bootstrap",
            image: bootstrap
        },
        {
            name: "Tailwind",
            image: tailwind
        },
        {
            name: "Github",
            image: github
        },
        {
            name: "React",
            image: react
        },
        {
            name: "Typescript",
            image: typescript
        },
        {
            name: "ASP.NET Core",
            image: netCore
        },
        {
            name: "MySQL",
            image: mysql
        },
        {
            name: "Visual Studio",
            image: visualStudio
        },
        {
            name: "Visual Studio Code",
            image: visualStudioCode
        },
        {
            name: "WebStorm",
            image: webstorm
        }
    ]

    return (
        <>
            <section className="w-[100%] dark:bg-gray-800 min-h-[95%] pb-14">
                <section className=" max-w-screen-xl m-auto flex flex-wrap w-[100%] justify-around py-10 lg:py-32 dark:bg-gray-800 ">
                    <div className="flex content-center flex-wrap px-6 mb-9">
                        <h1 className="text-2xl dark:text-white w-[100%] md:text-start lg:text-4xl text-center">
                            <b>Roberto del Pino Hormiga</b>
                        </h1>
                        <h1 className="text-xl dark:text-white mt-1.5 lg:text-2xl w-[100%] text-center md:text-start">Software Developer</h1>
                    </div>
                    <img loading="lazy" src={personalPhoto} alt="Photo of Roberto del Pino Hormiga"
                         className="w-72 lg:w-80 rounded-full border-black border-2 dark:border-white"/>
                </section>

                <section className="dark:bg-gray-800 dark:text-white max-w-screen-xl m-auto">
                    <h2 className="text-2xl text-bold text-center pt-10">Mi Stack Tecnológico</h2>
                    <p className="text-center mt-3">Herramientas que he estado utilizando en proyectos recientes</p>
                    < TechnologiesList list={techList} />
                </section>
            </section>
        </>
    );
};