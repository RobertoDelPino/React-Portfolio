import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go"

export const Footer = () => (
    <>
        <footer className="max-w-screen-xl w-full mx-auto mt-8 dark:bg-gray-800">
            <hr className="" />
            <section className="dark:bg-gray-800 m-auto md:flex md:justify-between dark:text-white px-10 py-3 pb-6">
                <h2 className="text-center block font-bold">Roberto del Pino Hormiga</h2>
                <section className="md:flex">
                    <p className="md:px-4 m-auto my-3 text-center"><a aria-label="Link hacia mi LinkedIn page" className="w-3 block m-auto" href="https://www.linkedin.com/in/robertodelpinohormiga/" target="_blank"><BsLinkedin/></a></p>
                    <p className="md:px-4 m-auto my-3 text-center"><a aria-label="Link hacia mi Github profile" className="w-3 block m-auto" href="https://github.com/RobertoDelPino" target="_blank"><BsGithub/></a></p>
                    <p className="md:px-4 m-auto my-3 text-center"><a aria-label="Link hacia mi Instragam page" className="w-3 block m-auto" href="https://www.instagram.com/roberto.ph03/" target="_blank"><BsInstagram/></a></p>
                    <p className="md:px-4 m-auto my-3 text-center"><a aria-label="¿Deseas enviarme un correo electrónico? Pulsa aquí" className="w-3 block m-auto" href="mailto:robertodelpino11@gmail.com" target="_blank"><GoMail/></a></p>
                </section>
            </section>
        </footer>
    </>
)