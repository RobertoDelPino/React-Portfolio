export class BlogEntryData {
    title: string
    date: string
    description: string
    topic: string

    constructor(title: string, description: string, date: string, topic: string) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.topic = topic
    }
}