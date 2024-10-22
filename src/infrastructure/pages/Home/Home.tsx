import { Helmet } from "react-helmet"
import { BlogEntryList } from "@components/BlogEntryList/BlogEntryList";
import articles from "@domain/Repository/Articles.tsx";
import NavigationButton from "@components/NavigationButton/NavigationButton";
import { frontendTechList, backendTechList, toolsTechList } from "@domain/Repository/Technologies";
import Technologies from "@components/Technologies/Technologies";

export const Home = () => {
    return (
        <section id="homePage" className="w-[100%] max-w-screen-xl m-auto dark:bg-gray-800 min-h-[95%] pb-10 flex flex-col flex-grow dark:text-white">
                <Helmet>
                    <title>Roberto del Pino - Web Developer</title>
                </Helmet>
                <section className="w-full m-auto flex flex-wrap justify-around py-12 dark:bg-gray-800 ">
                    <div className="flex justify-center flex-wrap px-6 mb-9 md:w-[45%] w-[100%]">
                        <div>
                            <img rel="preload" src={"/profilePhoto.webp"} alt="Photo of Roberto del Pino Hormiga"
                            className="w-48 h-48 lg:w-72 lg:h-72 rounded-full border-black border-2 dark:border-white
                            mb-5"/>
                        </div>
                        <h1 className=" w-[100%] lg:text-4xl">
                            <b className="text-2xl text-center w-[100%] block">Roberto del Pino Hormiga</b>
                        </h1>
                        <h2 className="text-xl mt-1.5 lg:text-2xl w-[100%] text-center">Web Developer</h2>
                        <a href="RobertoDelPinoCurriculum.pdf" target="_blank" className="block lg:hidden mt-3 text-sm transition duration-300 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded dark:bg-gray-200 dark:hover:bg-gray-400 dark:text-gray-800">Descargar CV</a>
                    </div>

                    <section className="lg:max-w-xl min-h-full h-4/5 m-auto w-[95%]">
                        <h2 className="text-2xl font-semibold text-center lg:text-left mb-5">Últimos artículos</h2>
                        <section className="flex flex-wrap justify-center">
                            {
                                < BlogEntryList blogEntryList={articles.slice(0,3)} />
                            }
                            <article className="w-[576px] flex justify-center lg:justify-end mt-3">
                                <article className="hover:border-b-black dark:hover:border-b-white transition duration-300 border-b border-b-transparent">
                                    <NavigationButton 
                                        className="font-semibold transition-all duration-300 relative bottom-0 hover:bottom-1"
                                        newRoute="/blog/"
                                        children="Ver más"
                                    />
                                </article>
                            </article>  
                        </section>
                    </section>
                </section>

                <article className="w-full m-auto">
                    <h2 className="text-3xl font-semibold text-center pt-10">Último Proyecto</h2>
                    
                    <section className="flex flex-wrap justify-center items-center gap-3 mx-3">
                        <article className="w-full flex justify-center flex-wrap m-auto mt-10 p-4 bg-slate-200 rounded-2xl lg:w-8/12 dark:bg-slate-700">
                            <div className="md:w-[38%] mt-0 md:mt-2 md:mr-2">
                                <NavigationButton 
                                    className="text-2xl font-bold dark:text-title-dark text-title border-b border-b-transparent hover:border-b-black dark:hover:border-b-white transition duration-300 text-left"
                                    newRoute="/projects"
                                    children="Real Time Chat App Backend 2.0"
                                />
                                <time className="mt-1 font-semibold">08-05-24</time>
                                <p className="mt-4 font-semibold">Refactorización del backend de la aplicación de chat en tiempo real creada con Typescript. Se ha utilizado Arquitectura Hexagonal y TDD.</p>
                                <NavigationButton 
                                    className="mt-3 font-semibold border-b border-transparent hover:border-b-black dark:hover:border-b-white transition duration-300 text-left"
                                    newRoute="/projects"
                                    children="Saber más"
                                />
                            </div>
                            <img className="md:w-[60%] mt-5 md:m-0" src="/ProjectImages/RealTimeChat/ChatPC.webp" alt="Pantalla inicial para chatear" />
                        </article>
                    </section>
                    <section className="m-auto mt-10">
                        <article 
                            className="m-auto hover:border-b-black dark:hover:border-b-white transition duration-300 border-b border-b-transparent w-36"
                        >
                            <NavigationButton 
                                className="font-semibold transition-all duration-300 relative bottom-0 hover:bottom-1"
                                newRoute="/projects"
                                children="Ver otros proyectos"
                            />
                        </article>
                    </section>
                </article>

                <article className="w-full m-auto">
                    <h2 className="text-3xl font-semibold text-center pt-10">Tecnologías</h2>
                    <p className="mb-10"></p>

                    <section className="flex flex-wrap justify-center items-center gap-3">
                        <Technologies techList={frontendTechList} name="Frontend" />
                        <Technologies techList={backendTechList} name="Backend" />
                        <Technologies techList={toolsTechList} name="Herramientas" />
                    </section>
                </article>
        </section>
    );
};