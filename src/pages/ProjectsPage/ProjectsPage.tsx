import { findImage } from "@assets/Images/Images";
import {ProjectsList} from "@components/ProjectsList/ProjectsList.tsx";
import {Project} from "@domain/Entities/Project.tsx";


export const ProjectsPage = () => {

    // Maybe use useContext to bring back the projects info?

    const list: Project[] = [
        new Project(
            "https://github.com/RobertoDelPino/React-Portfolio",
            "Mi portfolio",
            "Te presento el código de esta página, mi portfolio. Si deseas enviarme cualquier feedback contacta conmigo a través de mi correo.",
            "https://robertodelpino.netlify.com",
            findImage("robertoPortfolio")),
        new Project(
            "https://www.github.com",
            "Hiriambg portfolio",
            "Te presento el portfolio de una estudiante de fotografía, Hiriam Bartolomé, quien ha estado en diversos eventos internacionales como JSDay Canarias.",
            "https://hiriambg.netlify.com",
            findImage("hiriamPortfolio"))
    ]

    return (
        <section className=" 2xl:min-h-[95%] xl:min-h-[70%] md:min-h-[80%] dark:bg-gray-800">
            <article className="max-w-screen-xl m-auto dark:text-white mt-20">
                <h2 className="text-3xl font-bold text-center">Proyectos</h2>
                <p className="text-center text-lg">Proyectos que he creado hasta ahora</p>
                <ProjectsList list={list}/>
            </article>
        </section>
    );
}
