import {WorkExperienceCard} from "@components/WorkExperienceCard/WorkExperienceCard.tsx";

enum workday {
    FullTime = "Full time",
    PartTime = "Part time"
}

interface WorkExperience {
    name: string
    company: string
    urlCompany: string
    time: string
    workday: workday,
    workplace: string

}

export function WorkExperienceList() {
    
    const list: WorkExperience[] = [
        {
            name: "Prácticas de Web Developer",
            company: "LeanMind",
            urlCompany: "http://www.leanmind.es",
            time: "Marzo 2023 - Mayo 2023",
            workplace: "San Cristóbal de La Laguna",
            workday: workday.FullTime
        }
    ]
    
    return (
        <section className="border-b-2 pb-4 md:w-[70%] my-10">

            <WorkExperienceCard/>

        </section>
    )
}