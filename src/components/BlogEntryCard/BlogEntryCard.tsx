import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";
import { Link } from "react-router-dom"
import {findImage} from "@assets/Images/Images";

export const BlogEntryCard = (props: { blogEntry: BlogEntryData }) => {
  const filePath = props.blogEntry.title.replaceAll(" ", "-").toLowerCase();
  const image = findImage(props.blogEntry.topic);

  return (
    <article className="max-w-xl lg:w-[576px]">
      <Link to={"/blog/" + filePath}>
        <div className="flex items-center mb-0.5 hover:bg-gray-800/[.1] dark:hover:bg-slate-50/[.4] p-3 rounded group">
          <img className="w-[50px] h-[50px] group-hover:scale-[1.2] transition duration-500 opacity-80" src={image} alt="" />
          <div className="ml-5">
            <p className="dark:text-white text-lg w-[100%]">{props.blogEntry.title}</p>
            <p className="dark:text-white text-sm">{props.blogEntry.date}</p>
          </div>
        </div>
      </Link>   
    </article>
  )
}
  