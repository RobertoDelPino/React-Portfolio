import { Helmet } from "react-helmet"
import { BlogEntryList } from "@components/BlogEntryList/BlogEntryList";
import { findImage } from "@assets/Images/Images";
import articles from "@domain/Repository/Articles.tsx";
import { Technology } from "@components/Technology/Technology";
import NavigationButton from "@components/NavigationButton/NavigationButton";
import { frontendTechList, backendTechList, toolsTechList } from "@domain/Repository/Technologies";

export const Home = () => {
    const personalPhoto = findImage("personalPhoto");

    return (
        <section id="home" className="w-[100%] dark:bg-gray-800 min-h-[95%] pb-10 flex flex-col flex-grow">
            <section className="dark:bg-gray-800">
                <Helmet>
                    <title>Roberto del Pino - Web Developer</title>
                </Helmet>
                <section className=" max-w-screen-xl m-auto flex flex-wrap w-[100%] justify-around py-12 dark:bg-gray-800 ">
                    <div className="flex justify-center flex-wrap px-6 mb-9 md:w-[45%] w-[100%]">
                        <div>
                            <img rel="preload" src={personalPhoto} alt="Photo of Roberto del Pino Hormiga"
                            className="w-48 h-48 lg:w-72 lg:h-72 rounded-full border-black border-2 dark:border-white
                            mb-5"/>
                        </div>
                        <h1 className=" dark:text-white w-[100%] lg:text-4xl">
                            <b className="text-2xl text-center w-[100%] block">Roberto del Pino Hormiga</b>
                        </h1>
                        <h1 className="text-xl dark:text-white mt-1.5 lg:text-2xl w-[100%] text-center">Software Developer</h1>
                        <a href="RobertoDelPinoCurriculum.pdf" target="_blank" className="block lg:hidden mt-3 text-sm transition duration-300 bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded dark:bg-gray-200 dark:hover:bg-gray-400 dark:text-gray-800">Descargar CV</a>
                    </div>

                    <section className="lg:max-w-xl min-h-full h-4/5 m-auto w-[95%]">
                        <h1 className="text-2xl dark:text-white font-semibold text-center lg:text-left mb-5">Últimos artículos</h1>
                        <section className="flex flex-wrap justify-center">
                            {
                                < BlogEntryList blogEntryList={articles.slice(0,3)} />
                            }
                            <article className="w-[576px] flex justify-center lg:justify-end mt-3">
                                <article className="hover:border-b-black dark:hover:border-b-white transition duration-300 border-b border-b-transparent">
                                    <NavigationButton 
                                        className="font-semibold dark:text-white transition-all duration-300 relative bottom-0 hover:bottom-1"
                                        newRoute="/blog/"
                                        children="Ver más"
                                    />
                                </article>
                            </article>  
                        </section>
                    </section>
                </section>

                {/* <section className="dark:bg-gray-800 dark:text-white max-w-screen-xl m-auto">
                    <h2 className="text-2xl text-bold text-center pt-10">Mi Stack Tecnológico</h2>
                    <p className="text-center mt-3 px-10">Herramientas que he utilizado en proyectos recientes</p>
                    <section className="flex justify-center flex-wrap py-10 px-5 max-w-screen-lg m-auto">
                        {
                            techList.map((tech, index) => (
                                <Technology key={index} tech={tech}/>
                            ))
                        }
                    </section>
                </section> */}

                <article className="w-[100%] max-w-screen-xl m-auto dark:bg-gray-800 dark:text-white">
                    <h2 className="text-3xl font-semibold text-center pt-10">Tecnologías</h2>
                    <p className="mb-10"></p>

                    <section className="flex flex-wrap justify-center items-center gap-3">
                        <article id="frontend" className="lg:w-[27%] mx-3 lg:mx-0 text-center relative rounded-2xl 
                            p-6 dark:border  dark:border-dark-900 bg-gradient-to-b from-gray-200 to-gray-300
                            dark:from-slate-700 dark:to-black/60 shadow-2xl overflow-hidden"
                        >
                            <h3 className="text-2xl font-semibold mb-7">Frontend</h3> {/* Change color to title */}
                            <section className="flex flex-wrap justify-center flex-row gap-4">
                                {
                                    frontendTechList.map((tech, index) => (
                                        <Technology key={index} tech={tech}/>
                                    ))
                                }
                            </section>
                        </article>

                        <article id="backend" className="lg:w-[27%] mx-3 lg:mx-0 text-center relative rounded-2xl 
                            p-6 dark:border  dark:border-dark-900 bg-gradient-to-b from-gray-200 to-gray-300
                            dark:from-slate-700 dark:to-black/60 shadow-2xl overflow-hidden"
                        >
                            <h3 className="text-2xl font-semibold mb-7">Backend</h3> {/* Change color to title */}
                            <section className="flex flex-wrap justify-center flex-row gap-4">
                                {
                                    backendTechList.map((tech, index) => (
                                        <Technology key={index} tech={tech}/>
                                    ))
                                }
                            </section>
                        </article>

                        <article id="tools" className="lg:w-[27%] mx-3 lg:mx-0 text-center relative rounded-2xl 
                            p-6 dark:border  dark:border-dark-900 bg-gradient-to-b from-gray-200 to-gray-300
                            dark:from-slate-700 dark:to-black/60 shadow-2xl overflow-hidden"
                        >
                            <h3 className="text-2xl font-semibold mb-7">Herramientas</h3> {/* Change color to title */}
                            <section className="flex flex-wrap justify-center flex-row gap-4">
                                {
                                    toolsTechList.map((tech, index) => (
                                        <Technology key={index} tech={tech}/>
                                    ))
                                }
                            </section>
                        </article>
                    </section>

                </article>


            </section>
        </section>
    );
};