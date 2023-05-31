import {ProjectsList} from "@components/ProjectsList/ProjectsList.tsx";
import {Project} from "@domain/Entities/Project.tsx";
import projectExample from "@assets/ProjectsPhotos/projectExample.png"


export const ProjectsPage = () => {

    // Maybe use useContext to bring back the projects info?

    const list: Project[] = [
        new Project(
            "https://www.github.com",
            "Portfolio",
            "This is sample project description random things " +
            "are here in description This is sample project lorem " +
            "ipsum generator for dummy content",
            "https://robertodelpino.netlify.com",
            projectExample),
        new Project(
            "https://www.github.com",
            "Portfolio",
            "This is sample project description random things " +
            "are here in description This is sample project lorem " +
            "ipsum generator for dummy content",
            "https://robertodelpino.netlify.com",
            projectExample),
        new Project(
            "https://www.github.com",
            "Portfolio",
            "This is sample project description random things " +
            "are here in description This is sample project lorem " +
            "ipsum generator for dummy content",
            "https://robertodelpino.netlify.com",
            projectExample),
        new Project(
            "https://www.github.com",
            "Portfolio",
            "This is sample project description random things " +
            "are here in description This is sample project lorem " +
            "ipsum generator for dummy content",
            "https://robertodelpino.netlify.com",
            projectExample),
        new Project(
            "https://www.github.com",
            "Portfolio",
            "This is sample project description random things " +
            "are here in description This is sample project lorem " +
            "ipsum generator for dummy content",
            "https://robertodelpino.netlify.com",
            projectExample),
        new Project(
            "https://www.github.com",
            "Portfolio",
            "This is sample project description random things " +
            "are here in description This is sample project lorem " +
            "ipsum generator for dummy content",
            "https://robertodelpino.netlify.com",
            projectExample),
        new Project(
            "https://www.github.com",
            "Portfolio",
            "This is sample project description random things " +
            "are here in description This is sample project lorem " +
            "ipsum generator for dummy content",
            "https://robertodelpino.netlify.com",
            projectExample),
    ]

    return (
        <section className=" 2xl:min-h-[95%] md:min-h-[80%] dark:bg-gray-800">
            <article className="max-w-screen-xl m-auto dark:text-white mt-20">
                <h2 className="text-3xl font-bold text-center">Proyectos</h2>
                <p className="text-center text-lg">Proyectos que he creado hasta ahora</p>

                <ProjectsList list={list}/>

            </article>
        </section>
    );
}
