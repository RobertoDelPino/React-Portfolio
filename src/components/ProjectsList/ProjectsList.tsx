import {Project} from "@domain/Entities/Project.tsx";
import {ProjectCard} from "@components/ProjectCard/ProjectCard.tsx";

interface ProjectsListProps {
    list: Project[]
}

export const ProjectsList = ({list}:ProjectsListProps) => (
    <section role="region" aria-label="Project List Section" className="flex justify-center flex-wrap mt-5">
        {
            list.map((project: Project, index) => (
                <ProjectCard key={index} project={project}/>
            ))
        }
    </section>
)