import { Helmet } from "react-helmet"
import EducationExperiencies from "@domain/Repository/EducationExperiencies";
import { EducationCard } from "@pages/About/components/EducationCard/EducationCard";
import WorkExperiencies from "@domain/Repository/WorkExperiencies";
import { WorkExperienceCard } from "@pages/About/components/WorkExperienceCard/WorkExperienceCard";
import { EventCard } from "@pages/About/components/EventCard/EventCard";
import { WorkExperience } from "@domain/Interfaces/WorkExperience";
import { EducationExperience } from "@domain/Interfaces/EducationExperience";
import Events from "@domain/Repository/Events";
import { Event } from "@domain/Interfaces/Event";

export const About = () => {

    const educationExperiencies = EducationExperiencies;
    const workExperiencies = WorkExperiencies;
    const events = Events;

    return (
        <>
            <section id="about" className="dark:bg-gray-800 flex flex-col flex-grow">
                <Helmet>
                    <title>Roberto del Pino - Web Developer - About</title>
                </Helmet>
                <h1 className="text-2xl font-extrabold tracking-wide dark:text-title-dark mb-8 text-center pt-5">Sobre mi</h1>
                <section className="dark:bg-gray-800 max-w-screen-xl my-0 mx-auto lg:px-8 px-4 py-4 flex flex-wrap justify-center gap-6">

                    {/* Desktop */}

                    <div className="mb-5 hidden md:grid w-[580px] grid-cols-1 gap-6">
                        <article role="region" aria-label="About me region" className="mt-0 bg-slate-200 dark:bg-slate-700 p-4 rounded">
                            <p className="dark:text-gray-100 text-lg max-w-lg">Apasionado por el desarollo de software.
                                Invierto mi tiempo en aprender diversas arquitecturas como Arquitectura Hexagonal o Arquitectura limpia. Además,
                                desde que hice las prácticas en LeanMind, me gusta aplicar TDD en todos los proyectos que pueda.
                            </p>
                        </article>
                        <article role="region" aria-label="Education region" className="bg-slate-200 dark:bg-slate-700 p-4 rounded">
                            <h2 className="text-2xl font-bold tracking-wide dark:text-title-dark mb-4">Educación</h2>
                            <section className=" ">
                                {educationExperiencies.map((education: EducationExperience, index: number) => <EducationCard key={index} education={education}/>)}
                            </section>
                        </article>
                    </div>
                    <div className="hidden md:grid w-[580px] grid-cols-1 gap-6">
                        <article role="region" aria-label="Work experience region" className="bg-slate-200 dark:bg-slate-700 p-4 rounded">
                            <h2 className="text-2xl font-bold tracking-wide dark:text-title-dark">Experiencia de Trabajo</h2>
                                <section className="grid grid-cols-1 ml-5">
                                    {workExperiencies.map((work: WorkExperience, index: number) => <WorkExperienceCard key={index} work={work}/>)}
                                </section>
                        </article>

                        <article role="region" aria-label="Events region " className="mb-8 bg-slate-200 dark:bg-slate-700 p-4 rounded">
                            <h2 className="text-2xl font-bold tracking-wide dark:text-title-dark mb-4">Eventos asistidos</h2>
                            <section className="">
                                {events.map((event: Event, index: number) => <EventCard key={index}  event={event}/>)}
                            </section>
                        </article>
                    </div>

                    {/* Mobile */}

                    <div className="block md:hidden">
                        <article role="region" aria-label="About me region" className=" mb-8 mt-0 bg-slate-200 dark:bg-slate-700 p-4 rounded">
                            <p className="dark:text-gray-100 text-lg max-w-lg">Apasionado por el desarollo de software.
                                Invierto mi tiempo en aprender diversas arquitecturas como Arquitectura Hexagonal o Arquitectura limpia. Además,
                                desde que hice las prácticas en LeanMind, me gusta aplicar TDD en todos los proyectos que pueda.
                            </p>
                        </article>
                        
                        <article role="region" aria-label="Work experience region" className="mb-8 bg-slate-200 dark:bg-slate-700 p-4 rounded">
                            <h2 className="text-2xl font-bold tracking-wide dark:text-title-dark">Experiencia de Trabajo</h2>
                                <section className="grid grid-cols-1 ml-5">
                                    {workExperiencies.map((work: WorkExperience, index: number) => <WorkExperienceCard key={index} work={work}/>)}
                                </section>
                        </article>

                        <article role="region" aria-label="Education region" className="mt-12 bg-slate-200 dark:bg-slate-700 p-4 rounded">
                            <h2 className="text-2xl font-bold tracking-wide dark:text-title-dark mb-4">Educación</h2>
                            <section className=" ">
                                {educationExperiencies.map((education: EducationExperience, index: number) => <EducationCard key={index} education={education}/>)}
                            </section>
                        </article>

                        <article role="region" aria-label="Events region " className="mb-8 mt-12 bg-slate-200 dark:bg-slate-700 p-4 rounded">
                            <h2 className="text-2xl font-bold tracking-wide dark:text-title-dark mb-4">Eventos asistidos</h2>
                            <section className="">
                                {events.map((event: Event, index: number) => <EventCard key={index}  event={event}/>)}
                            </section>
                        </article>
                   </div>
                </section>
            </section>
        </>
    )
}