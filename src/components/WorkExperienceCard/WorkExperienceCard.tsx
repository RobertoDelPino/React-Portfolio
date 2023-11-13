import {WorkExperience} from "@domain/Interfaces/WorkExperience.tsx";

interface WorkExperienceCardProps {
    work: WorkExperience
}

export const WorkExperienceCard = ({work}: WorkExperienceCardProps) => 
    <section>
        <article className="hidden md:block border-b-2 pb-4 mt-3 ">
            <article className="md:flex justify-between">
                <h3 className="text-xl font-bold dark:text-white ">{work.name}</h3>
                <p className="inline-block bg-green-300 w-24 text-center rounded-3xl text-green-700 font-bold">{work.workday}</p>
            </article>
            <article className="flex justify-between mt-6 text-gray-500 dark:text-gray-300">
                <p>🔠<a href={work.urlCompany} target="_blank"
                    className="hover:border-b-2 py-1 hover:text-gray-800 dark:hover:text-gray-100 companyName">{work.company}</a></p>
                <p>🗺️{work.workplace}</p>
                <p>📅{work.time}</p>
            </article>
        </article>

        <article className="block md:hidden border-b-2 pb-4 my-8">
            <h3 className="text-lg font-bold dark:text-white">{work.name}</h3>
            <article className="flex justify-between mt-4">
                <p>🔠<a href={work.urlCompany} target="_blank"
                    className="hover:border-b-2 py-1 text-gray-500 hover:text-gray-600 dark:text-gray-300 companyName">{work.company}</a>
                </p>
                <p className="inline-block bg-green-300 w-24 text-center rounded-3xl text-green-700 font-bold">{work.workday}</p>
            </article>
            <p className="text-gray-500 dark:text-gray-300 my-3">🗺️{work.workplace}</p>
            <p className="text-gray-500 dark:text-gray-300">📅{work.time}</p>
        </article>
    </section>;