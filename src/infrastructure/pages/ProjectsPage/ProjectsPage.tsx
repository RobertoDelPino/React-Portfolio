import { Helmet } from "react-helmet"
import {Project} from "@domain/Entities/Project.tsx";
import Projects from "@domain/Repository/Projects";
import { ProjectCard } from "@pages/ProjectsPage/components/ProjectCard/ProjectCard";


export const ProjectsPage = () => {

    const projects = Projects;

    return (
        <section id="projects" className="dark:bg-gray-800 py-5 flex flex-col flex-grow ">
            <Helmet>
                <title>Roberto del Pino - Web Developer - Projects</title>
            </Helmet>
            <article className="max-w-screen-xl my-0 mx-auto dark:text-white">
                <h1 className="text-3xl font-bold text-center dark:text-title-dark">Proyectos</h1>
                <p className="text-center text-lg">Proyectos que he creado hasta ahora</p>
                <section role="region" aria-label="Project List Section" className="flex justify-center flex-wrap mt-5">
                    {
                        projects.map((project: Project, index: number) => (
                            <ProjectCard key={index} project={project}/>
                        ))
                    }
                </section>
            </article>
        </section>
    );
}
