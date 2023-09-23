import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";
import {BlogEntryCard} from "@components/BlogEntryCard/BlogEntryCard.tsx";

export const BlogEntryList = () => {
    const blogEntriesList : BlogEntryData[] = [
        {
          "title":"5 consejos para desarrolladores Junior", 
          "date":"2023-03-23",
          "description":"Te comparto 5 consejos para desarrolladores que están comenzando en el mundo de la programación",
          "topic":"javascript"
        },
        {
          "title":"Maneras de mejorar como desarrollador de aplicaciones", 
          "date":"2023-02-10",
          "description":"Ideas de proyectos para mejorar como desarollador",
          "topic":"javascript"
        },
        {
          "title":"Empezar bien el año siendo programador", 
          "date":"2023-01-01",
          "description":"Te muestro distintas ideas creativas para empezar con mucha motivación este 2023",
          "topic":"javascript"
        }
    ]
    return (
        <>
            {
                blogEntriesList.map((blogEntry: BlogEntryData, index) => (
                    <BlogEntryCard key={index} blogEntry={blogEntry}/>
                ))
            }
        </>
    )
    
}