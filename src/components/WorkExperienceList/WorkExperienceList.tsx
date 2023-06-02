import {WorkExperienceCard} from "@components/WorkExperienceCard/WorkExperienceCard.tsx";
import {workday, WorkExperience} from "@domain/Interfaces/WorkExperience.tsx";

export const WorkExperienceList = () => {

    const list: WorkExperience[] = [
        {
            name: "Web developer",
            company: "SaludOnNet",
            urlCompany: "https://www.saludonnet.com/",
            time: "Junio 2023 - Actualidad",
            workplace: "San Cristóbal de La Laguna",
            workday: workday.FullTime
        },
        {
            name: "Prácticas de Web Developer",
            company: "LeanMind",
            urlCompany: "https://www.leanmind.es",
            time: "Marzo 2023 - Mayo 2023",
            workplace: "San Cristóbal de La Laguna",
            workday: workday.FullTime
        }
    ]

    return (
        <section className="md:w-[70%] ">

            {
                list.map((work, index) => <WorkExperienceCard key={index} work={work}/>)
            }

        </section>
    )
};