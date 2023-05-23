import {ITechnology} from "@components/TecnologiesList/TechnologiesList.tsx";

export const Technology = (props: { tech: ITechnology }) => (
    <article aria-label="technology" className="mx-4 lg:mx-12 my-4">
        <img src={props.tech.image} alt={props.tech.name} className="w-24"/>
        <p className="hidden">{props.tech.name}</p>
    </article>
);