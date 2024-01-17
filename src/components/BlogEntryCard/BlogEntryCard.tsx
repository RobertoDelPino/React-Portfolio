import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";
import { Link } from "react-router-dom"
import {findImage} from "@assets/Images/Images";

export const BlogEntryCard = (props: { blogEntry: BlogEntryData }) => {
  const filePath = props.blogEntry.title.replaceAll(" ", "-").toLowerCase();
  const image = findImage(props.blogEntry.topic);

  return (
    <article className="max-w-xl xl:w-[576px] w-full min-h-[100px]">
      <Link to={"/blog/" + filePath} className="h-full">
        <div className="h-full flex items-center mb-0.5 transition duration-300 hover:bg-gray-800/[.1] dark:hover:bg-gray-700 p-3 rounded group">
          <img className="w-[50px] h-[50px] group-hover:scale-[1.2] transition duration-500 opacity-80" src={image} alt="" />
          <div className="ml-5">
            <p className="dark:text-white text-lg">{props.blogEntry.title}</p>
            <p className="dark:text-white text-sm">{props.blogEntry.date}</p>
          </div>
        </div>
      </Link>   
    </article>
  )
}
  