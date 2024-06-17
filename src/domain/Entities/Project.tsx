import { ITechnology } from "@domain/Interfaces/ITechnology"

export class Project {
    githubUrl: string
    title: string
    description: string
    image: string
    viewMoreUrl: string
    technologies: ITechnology[]

    constructor(
        githubUrl: string, 
        title: string, 
        description: string, 
        image: string,
        viewMoreUrl: string,
        technologies: ITechnology[]
    ) {
        this.githubUrl = githubUrl;
        this.title = title;
        this.description = description;
        this.image = image;
        this.viewMoreUrl = viewMoreUrl;
        this.technologies = technologies;
    }
}