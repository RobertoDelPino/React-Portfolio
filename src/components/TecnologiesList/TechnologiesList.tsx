import {Technology} from "@components/Technology/Technology.tsx";

export interface TechnologiesListProps {
    list: ITechnology[];
}

export interface ITechnology {
    name: string;
    image: string;
}

export const TechnologiesList = ({ list }: TechnologiesListProps )  => {
    return (
        <>
            <section className="flex justify-center flex-wrap py-10 px-5 max-w-screen-lg m-auto">
                {
                    list.map((tech, index) => (
                        <Technology key={index} tech={tech}/>
                    ))
                }
            </section>
        </>
    );
}