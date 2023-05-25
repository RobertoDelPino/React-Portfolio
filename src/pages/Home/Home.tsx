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


export const Home = () => {

    const techList: ITechnology[] = [
        {
            name: "Javascript",
            image: javascript
        },
        {
            name: "Bootstrap",
            image: bootstrap
        },
        {
            name: "HTML",
            image: html
        },
        {
            name: "CSS",
            image: css
        },
        {
            name: "Github",
            image: github
        },
        {
            name: "MySQL",
            image: mysql
        },
        {
            name: "Typescript",
            image: typescript
        },
        {
            name: "React",
            image: react
        },
    ]

    return (
        <>
            <section className=" max-w-screen-xl m-auto flex flex-wrap w-[100%] justify-around py-10 lg:py-32 dark:bg-gray-800 ">
                <div className="flex content-center flex-wrap px-6 mb-9">
                    <h1 className="text-2xl dark:text-white w-[100%] lg:text-4xl">
                        Hola! <br/>
                        Soy <b>Roberto del Pino Hormiga</b> <br/>
                    </h1>
                    <h1 className="text-xl dark:text-white mt-1.5 lg:text-2xl">Developer</h1>
                </div>
                <img src={personalPhoto} alt="Photo of Roberto del Pino Hormiga"
                     className="w-72 lg:w-80 rounded-full border-black border-2 dark:border-white"/>
            </section>

            <section className="dark:bg-gray-800 dark:text-white">
                <h2 className="text-2xl text-bold text-center pt-10">My Tech Stack</h2>
                <p className="text-center mt-3">Tools I've using in recent projects</p>
                < TechnologiesList list={techList} />
            </section>
        </>
    );
};