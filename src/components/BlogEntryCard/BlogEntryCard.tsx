import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";
import { useNavigate } from "react-router-dom"
import {findImage} from "@assets/Images/Images";
import { flushSync } from "react-dom";

export const BlogEntryCard = (props: { blogEntry: BlogEntryData }) => {
  const filePath = props.blogEntry.title.replaceAll(" ", "-").toLowerCase();
  const image = findImage(props.blogEntry.topic);
  const navigate = useNavigate();
    const viewNavigate = (newRoute: string) => {
        if (!document.startViewTransition) {
            return navigate(newRoute);
        } else {
            return document.startViewTransition(() => {
                flushSync(() => {
                    navigate(newRoute);
                });
            });
        }
    };

  return (
    <article className="max-w-xl xl:w-[576px] w-full min-h-[100px]">
      <a onClick={() => viewNavigate("/blog/" + filePath)} className="h-full hover:cursor-pointer">
        <div className="h-full flex items-center mb-0.5 transition duration-300 hover:bg-gray-800/[.1] dark:hover:bg-gray-700 p-3 rounded group">
          <img className="w-[50px] h-[50px] group-hover:scale-[1.2] transition duration-500 opacity-80" src={image} alt="" />
          <div className="ml-5">
            <p className="dark:text-white text-lg">{props.blogEntry.title}</p>
            <p className="dark:text-white text-sm">{props.blogEntry.date}</p>
          </div>
        </div>
      </a>   
    </article>
  )
}
  