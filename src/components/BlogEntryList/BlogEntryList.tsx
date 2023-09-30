import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";
import {BlogEntryCard} from "@components/BlogEntryCard/BlogEntryCard.tsx";

type BlogEntryListProps = { blogEntryList?: BlogEntryData[] };

export const BlogEntryList = ({ blogEntryList = null }: BlogEntryListProps ) => {
    
  if(blogEntryList.length == 0){
    return (
      <>
        <p>No se han encontrado artículos</p>
      </>
    )
  }

  if(blogEntryList && blogEntryList.length > 0){
    return (
      <>
        {
            blogEntryList.map((blogEntry: BlogEntryData, index) => (
                <BlogEntryCard key={index} blogEntry={blogEntry}/>
            ))
        }
    </>
    )
  }

  
  return (
    <>
        {
            blogEntryList.map((blogEntry: BlogEntryData, index) => (
                <BlogEntryCard key={index} blogEntry={blogEntry}/>
            ))
        }
    </>
  )
    
}