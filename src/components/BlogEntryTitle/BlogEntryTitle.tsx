import { findImage } from "@assets/Images/Images";
import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";


export const BlogEntryTitle = (props: { data: BlogEntryData }) => {
  const image = findImage(props.data.topic)
  return (
    <div className="flex mt-5 p-3 border-b-[1.8px]">
      <img className="absolute md:relative z-0 blur-2xl md:blur-none w-[80px] rounded" src={image} alt="" />
      <div className="relative z-1 ml-5 bg-transparent">
        <h4 className="text-black dark:text-white z-1 md:z-0 text-3xl mb-2.5 font-bold">{props.data.title}</h4>
        <p className="text-black md:dark:text-white/70 text-xs">Fecha de publicación: {props.data.date}</p>
        <p className="md:hidden text-black md:dark:text-white/70 text-xs capitalize">{props.data.topic}</p>
      </div>
    </div>
  )
}
  