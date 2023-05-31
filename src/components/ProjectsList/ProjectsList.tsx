import {Project} from "@domain/Entities/Project.tsx";
import {BsGithub, BsLink} from "react-icons/all";

interface ProjectsListProps {
    list: Project[]
}

export const ProjectsList = ({list}:ProjectsListProps) => (
    <section role="region" aria-label="Project List Section" className="flex justify-center flex-wrap mt-5">
        {
            list.map((project: Project, index) => (
                <article role="article" aria-label="Project" key={index} className="m-3 w-52 md:w-72 bg-gray-600 rounded-2xl">
                    <img src={project.image} alt={project.title}/>
                    <article className="p-4">
                        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                        <p>{project.description}</p>
                        <section className="mt-3 md:flex h-10 mb-5 md:mb-0">
                            <p className="mb-2 md:mb-0"> <BsLink className="inline h-[100%]"/> <a className="h-[100%] mr-3 text-center underline" target="_blank" href={project.previewUrl}>Live Preview</a> </p>
                            <p> <BsGithub className="inline h-[100%]"/> <a className="h-[100%] mr-4 text-center underline" target="_blank" href={project.githubUrl}>View Code</a> </p>
                        </section>
                    </article>
                </article>
            ))
        }
    </section>
)