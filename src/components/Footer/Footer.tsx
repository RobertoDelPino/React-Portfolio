import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"
import {GoMail} from "react-icons/go"

export const Footer = () => (
    <>
        <footer className="dark:bg-gray-800 w-[100%]">
            <section className="dark:bg-gray-800 max-w-screen-xl m-auto md:flex md:justify-between dark:text-white px-10 py-3 pb-6">
                <h2 className="text-center block font-bold">Roberto del Pino Hormiga</h2>
                <section className="md:flex">
                    <p className="md:px-4 m-auto my-3 text-center"><a className="w-3 block m-auto" href="https://www.linkedin.com/in/robertodelpinohormiga/" target="_blank"><BsLinkedin/></a></p>
                    <p className="md:px-4 m-auto my-3 text-center"><a className="w-3 block m-auto" href="https://github.com/RobertoDelPino" target="_blank"><BsGithub/></a></p>
                    <p className="md:px-4 m-auto my-3 text-center"><a className="w-3 block m-auto" href="https://www.instagram.com/roberto.ph03/" target="_blank"><BsInstagram/></a></p>
                    <p className="md:px-4 m-auto my-3 text-center"><a className="w-3 block m-auto" href="mailto:robertodelpino11@gmail.com" target="_blank"><GoMail/></a></p>
                </section>
            </section>
        </footer>
    </>
)