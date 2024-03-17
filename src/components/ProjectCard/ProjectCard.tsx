import NavigationButton from "@components/NavigationButton/NavigationButton";
import {Project} from "@domain/Entities/Project.tsx";
import {BsGithub, BsLink} from "react-icons/bs";


export const ProjectCard = (props: { project: Project }) => 
    <article role="article" aria-label="Project"className="m-3 w-72 dark:bg-gray-600 rounded-2xl border-2 dark:border-0">
        <img loading="lazy" className="h-[199px] object-cover rounded-t-2xl" src={props.project.image} alt={props.project.title}/>
        <article className="p-4">
            <h3 className="font-bold text-xl mb-2">{props.project.title}</h3>
            <p>{props.project.description}</p>
            <section className="mt-3 md:flex md:items-center">
                <p className="flex items-center mr-5 font-semibold border-b border-transparent hover:border-b-black dark:hover:border-b-white transition duration-300">
                    <BsGithub className="inline"/> 
                    <a className="ml-1" target="_blank" href={props.project.githubUrl}>Ver código</a>
                </p>
                {
                    props.project.viewMoreUrl != "/projects" &&
                        <NavigationButton 
                            className="mt-2 md:mt-0 font-semibold border-b border-transparent hover:border-b-black dark:hover:border-b-white transition duration-300"
                            newRoute={props.project.viewMoreUrl}
                            children="Saber más"
                        />
                }
                
            </section>
        </article>
    </article>;