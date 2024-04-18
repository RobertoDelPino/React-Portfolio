import { Helmet } from "react-helmet"

export const NotFound = () => {

    return (
        <section className="w-[100%] dark:bg-gray-800 flex flex-col flex-grow">
            <Helmet>
                <title>Roberto del Pino - Web Developer</title>
            </Helmet>
            <div className="text-center m-auto">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">ERROR 404</h1>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">Página no encontrada</p>
            </div>
        </section>
    );
};