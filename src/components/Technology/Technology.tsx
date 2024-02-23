import { ITechnology } from "@domain/Interfaces/ITechnology";

export const Technology = (props: { tech: ITechnology }) => (
    <article data-tooltip={props.tech.name} aria-label="technology" 
        className="relative text-center"
    >
        <img loading="lazy" src={props.tech.image} alt={props.tech.name} className="w-20 h-20 mx-auto"/>
        <p className="font-bold mt-2">{props.tech.name}</p>
    </article>
);

/*

Add tooltip:

before:opacity-0 before:content-[attr(data-tooltip)] before:absolute before:text-center
before:w-24 hover:before:opacity-100 before:mt-[-50px] before:right-[0%]
dark:hover:before:bg-slate-600 dark:text-white
before:font-bold hover:before:bg-gray-300 before:p-[10px]
before:rounded-lg before:shadow-xl before:transition
before:duration-150 before:ease-linear

*/