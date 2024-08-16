import NavigationButton from "@components/NavigationButton/NavigationButton";
import {Project} from "@domain/Entities/Project.tsx";
import {BsGithub} from "react-icons/bs";


export const ProjectCard = (props: { project: Project }) => 
    <article role="article" aria-label="Project" className="m-3 max-w-4xl min-h-[300px] dark:bg-slate-700 rounded-2xl border dark:border-0 flex flex-wrap md:flex-nowrap">
        <div className="md:max-w-md object-cover rounded-t-2xl md:rounded-r-none md:rounded-l-2xl flex items-center justify-center bg-slate-200 dark:bg-cyan-950/20">
            <img className="aspect-auto w-11/12" src={props.project.image} alt={props.project.title}/>
        </div>
        <article className="p-4">
            <h3 className="font-bold text-xl mb-2">{props.project.title}</h3>
            <p>{props.project.description}</p>
            <h4 className="font-semibold text-lg my-2">Tecnologías y herramientas</h4>
            <ul className="flex flex-wrap">
                {
                    props.project.technologies.map((technology, index) => (
                        <li key={index} className="mr-1 mb-1 bg-gray-300 dark:bg-gray-800 text-black dark:text-white px-2 rounded-full">{technology.name}</li>
                    ))
                }
            </ul>

            <section className="mt-3 md:flex md:items-center">
                <button className="flex items-center mr-5 font-semibold border-b border-transparent hover:border-b-black dark:hover:border-b-white transition duration-300">
                    <BsGithub className="inline"/> 
                    <a className="ml-1" target="_blank" href={props.project.githubUrl}>Ver código</a>
                </button>
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