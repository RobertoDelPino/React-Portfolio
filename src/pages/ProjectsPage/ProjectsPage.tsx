import {ProjectsList} from "@components/ProjectsList/ProjectsList.tsx";

export const ProjectsPage = () => {

    // Maybe use useContext to bring back the projects info?

    return (
        <section className=" 2xl:min-h-[95%] md:min-h-[80%] dark:bg-gray-800">
            <article className="max-w-screen-xl m-auto dark:text-white mt-20">
                <h2 className="text-3xl font-bold text-center">Proyectos</h2>
                <p className="text-center text-lg">Proyectos que he creado hasta ahora</p>

                <ProjectsList/>

            </article>
        </section>
    );
}
