export interface TechnologiesListProps {
    list: Technology[];
}

export interface Technology {
    name: string;
    image: string;
}

export const TechnologiesList = ({ list }: TechnologiesListProps )  => {
    return (
        <>
            <section className="flex justify-center flex-wrap py-10 px-5 w-[80%] m-auto">
                {
                    list.map((tech, index) => (
                        <article key={index} aria-label="technology" className="mx-4 lg:mx-12 my-4">
                            <img src={tech.image} alt={tech.name} className="w-24 lg:w-28"/>
                            <p className="hidden">{tech.name}</p>
                        </article>
                    ))
                }
            </section>
        </>
    );
}