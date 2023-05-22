import {Header} from "@components/Header/Header.tsx";
import photo from "../../assets/fotoPerfil-1.jpg"
export const Home = () => (
    <>
        <Header />

        <hr className="max-w-screen-xl m-auto"/>

        <section className=" max-w-screen-xl m-auto flex w-[100%] justify-around py-32 dark:bg-gray-800">
            <div className="flex content-center flex-wrap">
                <h1 className="text-4xl dark:text-white w-[100%] ">
                    Hola! <br/>
                    <b>Soy Roberto del Pino Hormiga</b> <br/>
                </h1>
                <h1 className="text-3xl dark:text-white mt-1.5">Developer</h1>
            </div>
            <img src={photo} alt="Photo of Roberto del Pino Hormiga" className="w-80 rounded-full"/>
        </section>
    </>
);