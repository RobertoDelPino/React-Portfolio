export class BlogEntryData {
    title: string
    slug: string
    date: string
    description: string
    topic: string

    constructor(title: string, slug: string, description: string, date: string, topic: string) {
        this.title = title;
        this.slug = slug;
        this.date = date;
        this.description = description;
        this.topic = topic
    }
}