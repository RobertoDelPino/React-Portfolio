import {Project} from "@domain/Entities/Project.tsx";
import {BsGithub, BsLink} from "react-icons/bs";


export const ProjectCard = (props: { project: Project }) => 
    <article role="article" aria-label="Project"className="m-3 w-72 dark:bg-gray-600 rounded-2xl border-2 dark:border-0">
        <img loading="lazy" className="h-[199px] object-cover rounded-t-2xl" src={props.project.image} alt={props.project.title}/>
        <article className="p-4">
            <h3 className="font-bold text-xl mb-2">{props.project.title}</h3>
            <p>{props.project.description}</p>
            <section className="mt-3 md:flex h-10 mb-5 md:mb-0">
                <p className="mb-2 md:mb-0"><BsLink className="inline h-[100%]"/> <a
                    className="h-[100%] mr-3 text-center underline" target="_blank" href={props.project.previewUrl}>Live
                    Preview</a></p>
                <p><BsGithub className="inline h-[100%]"/> <a className="h-[100%] mr-4 text-center underline"
                                                            target="_blank" href={props.project.githubUrl}>Ver
                    código</a></p>
            </section>
        </article>
    </article>;