import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";
import { Link } from "react-router-dom"


export const BlogEntryCard = (props: { blogEntry: BlogEntryData }) => {
  const filePath = props.blogEntry.title.replaceAll(" ", "-");
  return (
    <Link to={"/blog/" + filePath}>
        <div className="flex my-5 dark:hover:bg-slate-50/[.4] p-3 rounded group">
        <img className="w-[50px] group-hover:scale-[1.2] transition duration-500 opacity-80" src={`../../../src/assets/TechIcons/${props.blogEntry.topic}.webp`} alt="" />
        <div className="ml-5">
          <h4 className="dark:text-white text-lg">{props.blogEntry.title}</h4>
          <p className="dark:text-white text-sm">{props.blogEntry.date}</p>
        </div>
      </div>
    </Link>
  )
}
  