import { ITechnology } from "@domain/Interfaces/ITechnology";

interface TechnologyProps {
    techList: ITechnology[];
    name: string;
}

const Technologies = ( props: TechnologyProps) => {
    const { techList, name } = props;
    return (
        <article id="backend" className="w-full lg:w-[27%] mx-3 lg:mx-0 text-center relative rounded-2xl 
            p-6 dark:bg-slate-700 bg-slate-200 shadow-2xl overflow-hidden my-3"
        >
            <h3 className="text-2xl font-semibold mb-7">{name}</h3> {/* Change color to title */}
            <section className="flex flex-wrap justify-center flex-row gap-4">
                {
                    techList.map((tech, index) => (
                        <article data-tooltip={tech.name} aria-label="technology" className="relative text-center" key={index}>
                            <img loading="lazy" src={tech.image} alt={tech.name} className="w-20 h-20 mx-auto"/>
                            <p className="font-bold mt-2">{tech.name}</p>
                        </article>
                    ))
                }
            </section>
        </article>
    )
}

export default Technologies