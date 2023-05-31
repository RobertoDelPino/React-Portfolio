import personalPhoto from "../../assets/fotoPerfil-1.jpg"
import {TechnologiesList, ITechnology} from "@components/TecnologiesList/TechnologiesList.tsx";
import javascript from "../../assets/TechIcons/javascript.png"
import bootstrap from "../../assets/TechIcons/bootstrap.png"
import css from "../../assets/TechIcons/css-3.png"
import html from "../../assets/TechIcons/html-5.png"
import github from "../../assets/TechIcons/github.png"
import mysql from "../../assets/TechIcons/mysql.png"
import react from "../../assets/TechIcons/react.png"
import typescript from "../../assets/TechIcons/typescript.png"
import visualStudio from "../../assets/TechIcons/visual-studio.png"
import visualStudioCode from "../../assets/TechIcons/vscode.png"
import webstorm from "../../assets/TechIcons/webstorm.png"
import netCore from "../../assets/TechIcons/netcore.png"
import tailwind from "../../assets/TechIcons/tailwind.png"

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
            <section className="w-[100%] dark:bg-gray-800">
                <section className=" max-w-screen-xl m-auto flex flex-wrap w-[100%] justify-around py-10 lg:py-32 dark:bg-gray-800 ">
                    <div className="flex content-center flex-wrap px-6 mb-9">
                        <h1 className="text-2xl dark:text-white w-[100%] md:text-start lg:text-4xl text-center">
                            <b>Roberto del Pino Hormiga</b> <br/>
                        </h1>
                        <h1 className="text-xl dark:text-white mt-1.5 lg:text-2xl text-center w-[100%] md:w-auto">Software Developer</h1>
                    </div>
                    <img src={personalPhoto} alt="Photo of Roberto del Pino Hormiga"
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