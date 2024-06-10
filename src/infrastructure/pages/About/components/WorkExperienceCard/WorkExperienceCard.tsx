import {WorkExperience} from "@domain/Interfaces/WorkExperience.tsx";

interface WorkExperienceCardProps {
    work: WorkExperience
}

export const WorkExperienceCard = ({work}: WorkExperienceCardProps) => 
    <article className="relative mt-5 pl-12 border-l-2 border-solid border-l-[#12181b] ">
        <div className="absolute -left-7 top-0 bg-slate-700 w-14 h-14 rounded-[50%] flex items-center justify-center">
            <i className="fas fa-briefcase text-xl text-white"></i>
        </div>
        <p className="py-1 px-3 bg-slate-200 dark:bg-slate-700 dark:text-white rounded-2xl inline-block text-xs uppercase font-medium">{work.time}</p>
        <h5 className="pt-2 pb-4 px-0uppercase text-xl font-semibold dark:text-white">{work.name} - <a href={work.urlCompany} target="blank" className="text-black dark:text-[#b2becd] font-medium text-lg border-b-2 border-black hover:border-[#b2becd] dark:border-[#b2becd] dark:hover:border-gray-700">{work.company}</a></h5>
        <p className="text-black dark:text-[#b2becd] max-w-lg">
            {/* descripción */}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit sint eius beatae obcaecati fuga veniam odio itaque, magni aut natus qui accusantium possimus id in molestias quia eligendi molestiae amet!
        </p>
    </article>;

export const OldWorkExperienceCard = ({work}: WorkExperienceCardProps) =>
    <section>
        <article className="hidden md:block border-b-2 pb-4 mt-3 ">
            <article className="md:flex justify-between">
                <h3 className="text-xl font-medium dark:text-white ">{work.name}</h3>
                <p className="inline-block bg-green-300 w-24 text-center rounded-3xl text-black font-bold">{work.workday}</p>
            </article>
            <article className="flex justify-between mt-6 text-gray-500 dark:text-gray-300">
                <p className="w-[33%]">🔠<a href={work.urlCompany} target="_blank"
                    className="hover:border-b-2 py-1 hover:text-gray-800 dark:hover:text-gray-100 companyName">{work.company}</a></p>
                <p className="w-[33%]">🗺️{work.workplace}</p>
                <p className="w-[33%] text-right">📅{work.time}</p>
            </article>
        </article>

        <article className="block md:hidden border-b-2 pb-4 my-8">
            <h3 className="text-lg font-medium dark:text-white">{work.name}</h3>
            <article className="flex justify-between mt-4">
                <p>🔠<a href={work.urlCompany} target="_blank"
                    className="hover:border-b-2 py-1 text-gray-500 hover:text-gray-600 dark:text-gray-300 companyName">{work.company}</a>
                </p>
                <p className="inline-block bg-green-300 w-24 text-center rounded-3xl text-black font-bold">{work.workday}</p>
            </article>
            <p className="text-gray-500 dark:text-gray-300 my-3">🗺️{work.workplace}</p>
            <p className="text-gray-500 dark:text-gray-300">📅{work.time}</p>
        </article>
    </section>;