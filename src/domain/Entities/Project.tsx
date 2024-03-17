export class Project {
    githubUrl: string
    title: string
    description: string
    previewUrl: string
    image: string
    viewMoreUrl: string

    constructor(
        githubUrl: string, 
        title: string, 
        description: string, 
        previewUrl: string, 
        image: string,
        viewMoreUrl: string
    ) {
        this.githubUrl = githubUrl;
        this.title = title;
        this.description = description;
        this.previewUrl = previewUrl;
        this.image = image;
        this.viewMoreUrl = viewMoreUrl;
    }
}