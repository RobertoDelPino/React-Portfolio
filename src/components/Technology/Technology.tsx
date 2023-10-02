import {ITechnology} from "@components/TecnologiesList/TechnologiesList.tsx";

export const Technology = (props: { tech: ITechnology }) => (
    <article data-tooltip={props.tech.name} aria-label="technology" 
        className="mx-4 lg:mx-12 my-4 before:opacity-0 before:content-[attr(data-tooltip)] before:absolute before:text-center
        before:w-24 hover:before:opacity-100 before:mt-[-50px]
        "
    >
        <strong>
            <img loading="lazy" src={props.tech.image} alt={props.tech.name} className="w-24 h-24"/>
            <p className="hidden">{props.tech.name}</p>
        </strong>
    </article>
);