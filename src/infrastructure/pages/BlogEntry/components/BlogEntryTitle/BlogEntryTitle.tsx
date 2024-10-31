import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";


export const BlogEntryTitle = (props: { data: BlogEntryData }) => {
  return (
    <div className="flex mt-5 p-3 border-b-[1.8px] items-center">
      <img className="absolute md:relative z-0 blur-2xl md:blur-none w-[80px] h-[80px] rounded" src={"/TechIcons/" + props.data.topic + ".svg"} alt="" />
      <div className="relative z-1 md:ml-5 bg-transparent">
        <h4 className="text-black dark:text-white z-1 md:z-0 text-3xl mb-2.5 font-bold">{props.data.title}</h4>
        <p className="text-black dark:text-white/70 text-xs">Fecha de publicación: {props.data.date}</p>
        <p className="md:hidden text-black dark:text-white/70 text-xs capitalize">{props.data.topic}</p>
      </div>
    </div>
  )
}
  