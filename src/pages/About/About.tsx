
{/*

            About me        --> Sobre mi
            Work experience --> Experiencia de trabajo
            Education       --> Educación

            */}


export const About = () => {
    return (
        <>
            <section className="dark:bg-gray-800 max-w-screen-xl m-auto lg:p-8 p-4">
                <article role="region" aria-label="About me region" className="" >
                    <h2 className="text-2xl font-bold dark:text-white my-4">Sobre mi</h2>
                    <p className="dark:text-gray-100" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, deserunt dolorem eius esse officia quidem. Ad cum debitis, deleniti dolore eius molestiae pariatur reiciendis reprehenderit sapiente sed suscipit voluptatibus. Eius?</p>
                </article>

                <article role="region" aria-label="Work experience region">
                    <h2 className="text-2xl font-bold dark:text-white my-4">Experiencia de Trabajo</h2>
                    <section>
                        <section className="border-b-2 pb-4 md:w-[70%] my-10">

                            <section>
                                <article className="hidden md:block">
                                    <article className="md:flex justify-between">
                                        <h3 className="text-xl font-bold dark:text-white">Prácticas de Web Developer</h3>
                                        <p className="inline-block bg-green-300 w-24 text-center rounded-3xl text-green-700 font-bold">Full time</p>
                                    </article>
                                    <article className="flex justify-between mt-6 text-gray-500 dark:text-gray-300">
                                        <p><a href="https://www.leanmind.es" target="_blank" className="hover:border-b-2 py-1 hover:text-gray-800">🔠LeanMind</a></p>
                                        <p>🗺️San Cristóbal de La Laguna</p>
                                        <p>📅Marzo 2023 - Mayo 2023</p>
                                    </article>
                                </article>

                                <article className="block md:hidden">
                                    <h3 className="text-lg font-bold dark:text-white">Prácticas de Web Developer</h3>
                                    <article className="flex justify-between mt-4">
                                        <p><a href="https://www.leanmind.es" target="_blank" className="hover:border-b-2 py-1 text-gray-500 hover:text-gray-600 dark:text-gray-300">🔠LeanMind</a></p>
                                        <p className="inline-block bg-green-300 w-24 text-center rounded-3xl text-green-700 font-bold">Full time</p>
                                    </article>
                                    <p className="text-gray-500 dark:text-gray-300 my-3">🗺️San Cristóbal de La Laguna</p>
                                    <p className="text-gray-500 dark:text-gray-300">📅Marzo 2023 - Mayo 2023</p>
                                </article>
                            </section>

                        </section>

                    </section>

                </article>

                <article role="region" aria-label="Events region">
                    <h2 className="text-2xl font-bold dark:text-white my-4">Eventos asistidos</h2>

                </article>

                <article role="region" aria-label="Education region">
                    <h2 className="text-2xl font-bold dark:text-white my-4">Educación</h2>
                </article>
            </section>
        </>
    )
}