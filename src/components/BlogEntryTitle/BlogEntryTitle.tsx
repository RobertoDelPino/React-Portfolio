import {BlogEntryData} from "@domain/Entities/BlogEntryData.tsx";


export const BlogEntryTitle = (props: { data: BlogEntryData }) => {
  return (
    <div className="flex mt-5 p-3 rounded">
      <img className="w-[80px]" src={`../../../src/assets/TechIcons/${props.data.topic}.webp`} alt="" />
      <div className="ml-5">
        <h4 className="dark:text-white text-3xl mb-2.5 font-bold">{props.data.title}</h4>
        <p className="dark:text-white/70 text-xs">Fecha de publicación: {props.data.date}</p>
      </div>
    </div>
  )
}
  