import {BsInstagram, BsLinkedin, GoMail} from "react-icons/all";

export const Footer = () => (
    <>
        <footer className="dark:bg-gray-800 w-[100%]">
            <section className="dark:bg-gray-800 max-w-screen-xl m-auto md:flex md:justify-between dark:text-white px-10 py-3 pb-6">
                <h2 className="text-center block font-bold">Roberto del Pino Hormiga</h2>
                <section className="md:flex">
                    <p className="md:px-4 m-auto my-3 text-center"><a className="w-[10%] block m-auto" href=""><BsLinkedin/></a></p>
                    <p className="md:px-4 m-auto my-3 text-center"><a className="w-[10%] block m-auto" href=""><BsInstagram/></a></p>
                    <p className="md:px-4 m-auto my-3 text-center"><a className="w-[10%] block m-auto" href=""><GoMail/></a></p>
                </section>
            </section>
        </footer>
    </>
)