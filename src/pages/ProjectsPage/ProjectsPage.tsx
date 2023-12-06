import { Helmet } from "react-helmet"
import { findImage } from "@assets/Images/Images";
import {ProjectsList} from "@components/ProjectsList/ProjectsList.tsx";
import {Project} from "@domain/Entities/Project.tsx";


export const ProjectsPage = () => {

    // Maybe use useContext to bring back the projects info?

    const list: Project[] = [
        new Project(
            "https://github.com/RobertoDelPino/Real-Time-Chat",
            "Real Time Chat App",
            "Aplicación de chat en tiempo real creada con React, Node.js, Express, MongoDB y Socket.io. Además, está desplegado utilizando Docker Compose.",
            "http://chat-prueba.online",
            findImage("realTimeChat")),
        new Project(
            "https://github.com/RobertoDelPino/React-Portfolio",
            "Mi portfolio",
            "Te presento el código de esta página, mi portfolio. Si deseas enviarme cualquier feedback contacta conmigo a través de mi correo.",
            "https://robertodelpino.dev",
            findImage("robertoPortfolio")),
        new Project(
            "https://github.com/RobertoDelPino/Javascript-Course-Projects",
            "Proyetos de aprendizaje de Javascript",
            "Aqui podrás ver todos los proyectos en los que he estado trabajando para poder aprender y mejorar en Javascript",
            "https://github.com/RobertoDelPino/Javascript-Course-Projects",
            findImage("javascriptProjects"))
    ]

    return (
        <section className="dark:bg-gray-800 min-h-screen lg:min-h-[50%] py-10">
            <Helmet>
                <title>Roberto del Pino - Web Developer - Projects</title>
            </Helmet>
            <article className="max-w-screen-xl m-auto dark:text-white">
                <h2 className="text-3xl font-bold text-center">Proyectos</h2>
                <p className="text-center text-lg">Proyectos que he creado hasta ahora</p>
                <ProjectsList list={list}/>
            </article>
        </section>
    );
}
