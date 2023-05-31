export class Project {
    githubUrl: string
    title: string
    description: string
    previewUrl: string
    image: string

    constructor(githubUrl: string, title: string, description: string, previewUrl: string, image: string) {
        this.githubUrl = githubUrl;
        this.title = title;
        this.description = description;
        this.previewUrl = previewUrl;
        this.image = image
    }
}