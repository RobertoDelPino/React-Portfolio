import { ITechnology } from "@domain/Interfaces/ITechnology"

export class Project {
    githubUrl: string
    title: string
    description: string
    previewUrl: string
    image: string
    viewMoreUrl: string
    technologies: ITechnology[]

    constructor(
        githubUrl: string, 
        title: string, 
        description: string, 
        previewUrl: string, 
        image: string,
        viewMoreUrl: string,
        technologies: ITechnology[]
    ) {
        this.githubUrl = githubUrl;
        this.title = title;
        this.description = description;
        this.previewUrl = previewUrl;
        this.image = image;
        this.viewMoreUrl = viewMoreUrl;
        this.technologies = technologies;
    }
}