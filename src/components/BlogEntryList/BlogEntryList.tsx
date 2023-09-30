import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";
import {BlogEntryCard} from "@components/BlogEntryCard/BlogEntryCard.tsx";
import articlesData from "@domain/Repository/Articles.tsx";

type BlogEntryListProps = { allList?: boolean };

export const BlogEntryList = ({ allList = false }: BlogEntryListProps ) => {
    
  let articlesDataToShow = [];
  allList ? articlesDataToShow = articlesData : articlesDataToShow = articlesData.slice(0,4) ;


  return (
    <>
        {
            articlesDataToShow.map((blogEntry: BlogEntryData, index) => (
                <BlogEntryCard key={index} blogEntry={blogEntry}/>
            ))
        }
    </>
  )
    
}