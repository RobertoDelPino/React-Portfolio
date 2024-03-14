import { Technology } from "@components/Technology/Technology";
import { ITechnology } from "@domain/Interfaces/ITechnology";

interface TechnologyProps {
    techList: ITechnology[];
    name: string;
}

const Technologies = ( props: TechnologyProps) => {
    const { techList, name } = props;
    return (
        <article id="backend" className="w-full lg:w-[27%] mx-3 lg:mx-0 text-center relative rounded-2xl 
            p-6 bg-slate-700 shadow-2xl overflow-hidden my-3"
        >
            <h3 className="text-2xl font-semibold mb-7">{name}</h3> {/* Change color to title */}
            <section className="flex flex-wrap justify-center flex-row gap-4">
                {
                    techList.map((tech, index) => (
                        <Technology key={index} tech={tech}/>
                    ))
                }
            </section>
        </article>
    )
}

export default Technologies