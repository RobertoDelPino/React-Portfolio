import { Helmet } from "react-helmet"
import EducationExperiencies from "@domain/Repository/EducationExperiencies";
import { EducationCard } from "@components/EducationCard/EducationCard";
import WorkExperiencies from "@domain/Repository/WorkExperiencies";
import { WorkExperienceCard } from "@components/WorkExperienceCard/WorkExperienceCard";
import { EventCard } from "@components/EventCard/EventCard";
import { WorkExperience } from "@domain/Interfaces/WorkExperience";
import { EducationExperience } from "@domain/Interfaces/EducationExperience";
import Events from "@domain/Repository/Events";
import { Event } from "@domain/Interfaces/Event";

{/*

About me        --> Sobre mi
Work experience --> Experiencia de trabajo
Education       --> Educación

*/}


export const About = () => {

    const educationExperiencies = EducationExperiencies;
    const workExperiencies = WorkExperiencies;
    const events = Events;

    return (
        <>
            <section className="dark:bg-gray-800 flex flex-col flex-grow">
                <Helmet>
                    <title>Roberto del Pino - Web Developer - About</title>
                </Helmet>
                <section className="dark:bg-gray-800 max-w-screen-xl my-0 mx-auto lg:px-8 px-4 py-4">
                    <article role="region" aria-label="About me region" className="mb-8 mt-0">
                        <h2 className="text-2xl font-extrabold tracking-wide dark:text-white my-4">Sobre mi</h2>
                        <p className="dark:text-gray-100 w-[100%] lg:w-[70%]">Apasionado por el desarollo de software.
                            Invierto mi tiempo en aprender diversas arquitecturas como Arquitectura Hexagonal o Arquitectura limpia. Además,
                            desde que hice las prácticas en LeanMind, me gusta aplicar TDD en todos los proyectos que pueda.
                        </p>
                    </article>

                    <article role="region" aria-label="Work experience region" className="mb-8">
                        <h2 className="text-2xl font-extrabold tracking-wide dark:text-white my-4">Experiencia de
                            Trabajo</h2>
                            <section className="md:w-[70%] ">
                                {workExperiencies.map((work: WorkExperience, index: number) => <WorkExperienceCard key={index} work={work}/>)}
                            </section>
                    </article>

                    <article role="region" aria-label="Events region " className="mb-8">
                        <h2 className="text-2xl font-extrabold tracking-wide dark:text-white my-4">Eventos asistidos</h2>
                        <section className="md:w-[70%]">
                            {events.map((event: Event, index: number) => <EventCard key={index}  event={event}/>)}
                        </section>
                    </article>

                    <article role="region" aria-label="Education region" className="">
                        <h2 className="text-2xl font-extrabold tracking-wide dark:text-white my-4">Educación</h2>
                        <section className="md:w-[70%] ">
                            {educationExperiencies.map((education: EducationExperience, index: number) => <EducationCard key={index} education={education}/>)}
                        </section>
                    </article>
                </section>
            </section>
        </>
    )
}