export const WorkExperienceCard = () => <section>
    <article className="hidden md:block">
        <article className="md:flex justify-between">
            <h3 className="text-xl font-bold dark:text-white">Prácticas de Web Developer</h3>
            <p className="inline-block bg-green-300 w-24 text-center rounded-3xl text-green-700 font-bold">Full
                time</p>
        </article>
        <article className="flex justify-between mt-6 text-gray-500 dark:text-gray-300">
            <p><a href="https://www.leanmind.es" target="_blank"
                  className="hover:border-b-2 py-1 hover:text-gray-800">🔠LeanMind</a></p>
            <p>🗺️San Cristóbal de La Laguna</p>
            <p>📅Marzo 2023 - Mayo 2023</p>
        </article>
    </article>

    <article className="block md:hidden">
        <h3 className="text-lg font-bold dark:text-white">Prácticas de Web Developer</h3>
        <article className="flex justify-between mt-4">
            <p><a href="https://www.leanmind.es" target="_blank"
                  className="hover:border-b-2 py-1 text-gray-500 hover:text-gray-600 dark:text-gray-300">🔠LeanMind</a>
            </p>
            <p className="inline-block bg-green-300 w-24 text-center rounded-3xl text-green-700 font-bold">Full
                time</p>
        </article>
        <p className="text-gray-500 dark:text-gray-300 my-3">🗺️San Cristóbal de La Laguna</p>
        <p className="text-gray-500 dark:text-gray-300">📅Marzo 2023 - Mayo 2023</p>
    </article>
</section>;