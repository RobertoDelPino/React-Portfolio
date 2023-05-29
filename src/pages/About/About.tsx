import {WorkExperienceList} from "@components/WorkExperienceList/WorkExperienceList.tsx";
import {EducationExperienceList} from "@components/EducationExperienceList/EducationExperienceList.tsx";
import {EventsList} from "@components/EventList/EventsList.tsx";

{/*

About me        --> Sobre mi
Work experience --> Experiencia de trabajo
Education       --> Educación

*/}


export const About = () => {
    return (
        <>
            <section className="dark:bg-gray-800 max-w-screen-xl m-auto lg:p-8 p-4 lg:h-[90%]">
                <article role="region" aria-label="About me region" className="">
                    <h2 className="text-2xl font-extrabold tracking-wide dark:text-white my-4">Sobre mi</h2>
                    <p className="dark:text-gray-100">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum,
                        deserunt dolorem eius esse officia quidem. Ad cum debitis, deleniti dolore eius molestiae
                        pariatur reiciendis reprehenderit sapiente sed suscipit voluptatibus. Eius?</p>
                </article>

                <article role="region" aria-label="Work experience region">
                    <h2 className="text-2xl font-extrabold tracking-wide dark:text-white my-4">Experiencia de
                        Trabajo</h2>
                    <WorkExperienceList/>
                </article>

                <article role="region" aria-label="Events region">
                    <h2 className="text-2xl font-extrabold tracking-wide dark:text-white my-4">Eventos asistidos</h2>
                    <EventsList/>
                </article>

                <article role="region" aria-label="Education region">
                    <h2 className="text-2xl font-extrabold tracking-wide dark:text-white my-4">Educación</h2>
                    <EducationExperienceList/>
                </article>
            </section>
        </>
    )
}