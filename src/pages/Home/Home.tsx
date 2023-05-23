import {Header} from "@components/Header/Header.tsx";
import photo from "../../assets/fotoPerfil-1.jpg"
export const Home = () => (
    <>
        <Header />

        <hr className="max-w-screen-xl m-auto"/>

        <section className=" max-w-screen-xl m-auto flex flex-wrap w-[100%] justify-around py-10 lg:py-32 dark:bg-gray-800 ">
            <div className="flex content-center flex-wrap px-6 mb-9">
                <h1 className="text-2xl dark:text-white w-[100%] lg:text-4xl">
                    Hola! <br/>
                    Soy <b>Roberto del Pino Hormiga</b> <br/>
                </h1>
                <h1 className="text-xl dark:text-white mt-1.5 lg:text-2xl">Developer</h1>
            </div>
            <img src={photo} alt="Photo of Roberto del Pino Hormiga" className="w-72 lg:w-80 rounded-full border-black border-2 dark:border-white"/>
        </section>
    </>
);