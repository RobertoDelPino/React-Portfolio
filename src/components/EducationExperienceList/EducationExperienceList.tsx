import {EducationExperience} from "@domain/Interfaces/EducationExperience.tsx";
import {EducationCard} from "@components/EducationCard/EducationCard.tsx";

export const EducationExperienceList = () => {

    const list: EducationExperience[] = [
        {
            name: "Curso de Docker🐋",
            time: "Noviembre 2023 - Diciembre 2023",
            place: "San Cristóbal de La Laguna",
            institute: "Udemy",
            instituteUrl: "https://www.udemy.com/"
        },
        {
            name: "Desarrollo de Aplicaciones Web (DAW)",
            time: "Septiembre 2021 - Mayo 2023",
            place: "San Cristóbal de La Laguna",
            institute: "CIFP César Manrique",
            instituteUrl: "https://www.cifpcesarmanrique.es"
        }
    ]

    return (
        <section className="md:w-[70%] ">

            {
                list.map((education, index) => <EducationCard key={index} education={education}/>)
            }

        </section>
    )
};