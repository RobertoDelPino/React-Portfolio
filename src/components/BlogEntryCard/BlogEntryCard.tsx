import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";
import { Link } from "react-router-dom"
import {findImage} from "@assets/Images/Images";
import { useEffect } from "react";


export const BlogEntryCard = (props: { blogEntry: BlogEntryData }) => {
  const filePath = props.blogEntry.title.replaceAll(" ", "-").toLowerCase();
  const image = findImage(props.blogEntry.topic);

  useEffect(() => {
    const pedirDatos = async () => {
      const data = await fetch("www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
      console.log(data)
    }

    pedirDatos()
  })

  
  
  return (
    <article className="max-w-xl">
      <Link to={"/blog/" + filePath}>
        <div className="flex items-center mb-0.5 hover:bg-gray-800/[.1] dark:hover:bg-slate-50/[.4] p-3 rounded group">
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
  