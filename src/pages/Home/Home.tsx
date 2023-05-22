import {Header} from "@components/Header/Header.tsx";
import photo from "../../assets/fotoPerfil-1.jpg"
export const Home = () => (
    <>
        <Header />

        <section className="flex w-[100%] justify-center">
            <div className="flex content-center flex-wrap">
                <h2 className="w-96 text-center">Developer</h2>
            </div>
            <img src={photo} alt="Photo of Roberto del Pino Hormiga" className="w-72 rounded-full"/>
        </section>
    </>
);