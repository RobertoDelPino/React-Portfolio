import { Helmet } from "react-helmet"
import {TechnologiesList, ITechnology} from "@components/TecnologiesList/TechnologiesList.tsx";
import { BlogEntryList } from "@components/BlogEntryList/BlogEntryList";
import { findImage } from "@assets/Images/Images";
import articles from "@domain/Repository/Articles.tsx";

export const Home = () => {
    const personalPhoto = findImage("personalPhoto");
    const techList: ITechnology[] = [
        {
            name: "HTML",
            image: findImage("html")
        },
        {
            name: "CSS",
            image: findImage("css")
        },
        {
            name: "Javascript",
            image: findImage("javascript")
        },
        {
            name: "Bootstrap",
            image: findImage("bootstrap")
        },
        {
            name: "Tailwind",
            image: findImage("tailwind")
        },
        {
            name: "Github",
            image: findImage("github")
        },
        {
            name: "React",
            image: findImage("react")
        },
        {
            name: "Typescript",
            image: findImage("typescript")
        },
        {
            name: "ASP.NET Core",
            image: findImage("netcore")
        },
        {
            name: "MySQL",
            image: findImage("mysql")
        },
        {
            name: "Visual Studio",
            image: findImage("visualStudio")
        },
        {
            name: "Visual Studio Code",
            image: findImage("visualStudioCode")
        },
        {
            name: "WebStorm",
            image: findImage("webstorm")
        },
    ]

    return (
        <>
            <section className="w-[100%] dark:bg-gray-800 min-h-[95%] pb-10">
                <Helmet>
                    <title>Roberto del Pino - Web Developer</title>
                </Helmet>
                <section className=" max-w-screen-xl m-auto flex flex-wrap w-[100%] justify-around py-12 dark:bg-gray-800 ">
                    <div className="flex justify-center flex-wrap px-6 mb-9 md:w-[45%] w-[100%]">
                        <div>
                            <img src={personalPhoto} alt="Photo of Roberto del Pino Hormiga"
                            className="w-48 h-48 lg:w-72 lg:h-72 rounded-full border-black border-2 dark:border-white
                            mb-5"/>
                        </div>
                        <h1 className=" dark:text-white w-[100%] lg:text-4xl">
                            <b className="text-2xl text-center w-[100%] block">Roberto del Pino Hormiga</b>
                        </h1>
                        <h1 className="text-xl dark:text-white mt-1.5 lg:text-2xl w-[100%] text-center">Software Developer</h1>
                    </div>

                    <section className="lg:max-w-xl min-h-full h-4/5 m-auto w-[95%]">
                        <h1 className="text-2xl dark:text-white font-semibold text-center lg:text-left mb-5">Últimos artículos</h1>
                        <section className="flex justify-center flex-wrap">
                            {
                                < BlogEntryList blogEntryList={articles.slice(0,4)} />
                            }
                        </section>
                    </section>
                </section>

                <section className="dark:bg-gray-800 dark:text-white max-w-screen-xl m-auto">
                    <h2 className="text-2xl text-bold text-center pt-10">Mi Stack Tecnológico</h2>
                    <p className="text-center mt-3 px-10">Herramientas que he estado utilizando en proyectos recientes</p>
                    < TechnologiesList list={techList} />
                </section>
            </section>
        </>
    );
};