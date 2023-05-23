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
            <section>
                {
                    list.map((tech, index) => (
                        <article key={index} aria-label="technology">
                            <img src={tech.image} alt={tech.name}/>
                            <p>{tech.name}</p>
                        </article>
                    ))
                }
            </section>
        </>
    );
}