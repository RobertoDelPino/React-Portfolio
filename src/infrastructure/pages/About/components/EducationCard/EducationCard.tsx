import {EducationExperience} from "@domain/Interfaces/EducationExperience.tsx";

interface EducationCardProps {
    education: EducationExperience
}

export const EducationCard = ({education}: EducationCardProps) => <section>
    <article className="hidden md:block border-b-2 pb-4 mt-3">
        <article className="md:flex justify-between">
            <h3 className="text-xl font-medium dark:text-white">{education.name}</h3>
            <p className="text-gray-500 dark:text-gray-300">📅{education.time}</p>
        </article>
        <p className="mt-6 text-gray-500 dark:text-gray-300">🔠
            <a href={education.instituteUrl} 
                target="_blank" 
                className="hover:border-b-2 py-1 hover:text-gray-800 dark:hover:text-gray-200">
                    {education.institute}
            </a>
            {education.place && <span> en {education.place}</span>} 
        </p>
    </article>

    <article className="block md:hidden border-b-2 pb-4 my-8">
        <h3 className="text-lg font-medium dark:text-white">{education.name}</h3>
        <p className="mt-4">🔠<a href={education.instituteUrl} target="_blank"
                               className="hover:border-b-2 py-1 text-gray-500 hover:text-gray-600 dark:text-gray-300">{education.institute}</a>
        </p>
        <p className="text-gray-500 dark:text-gray-300 my-3">🗺️{education.place}</p>
        <p className="text-gray-500 dark:text-gray-300">📅{education.time}</p>
    </article>
</section>