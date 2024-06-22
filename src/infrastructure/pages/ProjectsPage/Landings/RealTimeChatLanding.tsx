import NavigationButton from "@components/NavigationButton/NavigationButton"
import Technologies from "@components/Technologies/Technologies"
import { realTimeChatLanding } from "@domain/Repository/Technologies"
import { Helmet } from "react-helmet"


const RealTimeChatLanding = () => {
    return (
        <main className="w-[100%] max-w-screen-lg m-auto px-4 min-h-[95%] pb-10 flex flex-col flex-grow dark:text-white ">
            <Helmet>
                <title>Real Time Chat Project - Roberto del Pino - Web Developer - Projects</title>
            </Helmet>
            
            <NavigationButton 
                className="w-fit mt-5 font-semibold border-b border-transparent hover:border-b-black dark:hover:border-b-white transition duration-300"
                newRoute="/projects"
                children="Volver a los proyectos"
            />

            <section className="flex justify-start flex-wrap mt-5">
                <img className="aspect-auto border lg:w-[50%]" src="/ProjectImages/RealTimeChat/ChatPC.webp" alt="Pantalla inicial para chatear" />
                <div className="mt-5 lg:mt-0 lg:ml-9 lg:w-[45%]">
                    <h1 className="text-3xl font-bold text-title dark:text-title-dark">RealTimeChat App</h1>
                    <p className="text-xl font-medium">FullStack</p>
                    <p className="mt-5 text-xl"><strong>Objetivo principal: </strong> 
                     aprender los fundamentos de los eventos con 
                    Socket.IO y utilizar una base de datos no relacional como base de 
                    datos principal.</p>
                    <div className="flex mt-5">
                        <p className="text-lg font-bold inline-block">30-01-24</p>
                        <button className="flex items-center ml-5 font-semibold border-b border-transparent hover:border-b-black dark:hover:border-b-white transition duration-300">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="inline" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                            <a className="ml-1 text-lg" target="_blank" href="https://github.com/RobertoDelPino/RealTimeChatBackend-Typescript">Ver código</a>
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-title dark:text-title-dark mt-5">Descripción</h2>
                <p className="text-lg mt-5 font-medium">Este proyecto consiste en una aplicación de chat en tiempo real, parecido a 
                whatsapp pero más limitado en funcionalidades. El propósito principal es aprender a utilizar websocket 
                y entender cómo funcionan los eventos, además de aprender a utilizar MongoDB como base de datos principal.</p>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-title dark:text-title-dark mt-5" >Tecnologías</h2>
                <section className="flex flex-wrap justify-center items-center gap-3">
                        <Technologies techList={realTimeChatLanding.frontendTechList} name="Frontend" />
                        <Technologies techList={realTimeChatLanding.backendTechList} name="Backend" />
                        <Technologies techList={realTimeChatLanding.toolsTechList} name="Herramientas" />
                </section>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-title dark:text-title-dark mt-5" >Características</h2>
                <ul className="list-disc ml-7 mt-5 font-medium text-lg">
                    <li>Chat en tiempo real</li>
                    <li>Base de datos MongoDB</li>
                    <li>Autenticación de usuarios</li>
                    <li>Añadir/cambiar foto de perfil</li>
                    <li>Recuperación de contraseña</li>
                    <li>Confirmación de cuenta a través del correo electrónico</li>
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-bold text-title dark:text-title-dark mt-5" >Instalación</h2>
                <ul className="list-decimal ml-7 mt-5 font-medium text-lg">
                    <li>Clonar el repositorio</li>
                    <li>Comando "npm install" dentro de cada carpeta</li>
                    <li>Configurar archivo ".env" en cada carpeta
                        <ul className="list-disc ml-5">
                            <li>Front
                                <ul className="list-disc ml-5">
                                   <li> VITE_BACKEND_URL= "http://localhost:3000" (ejemplo)</li> 
                                </ul>
                            </li>
                            <li>Backend
                                <ul className="list-disc ml-5">
                                    <li>FRONTEND_URL= "http://localhost:4000" (ejemplo)</li>
                                    <li>JWT_SECRET: String secreto para crear el JWT token</li>
                                    <li>PORT: Puerto que está abierto en el lado front</li>
                                    <li>MONGO_URI: Url de conexión a MongoDB</li>
                                    <li>Envío de email:
                                        <ul className="list-disc ml-5">
                                            <li>Si se utiliza gmail como servicio de envío de email
                                                <ul className="list-disc ml-5">
                                                    <li>EMAIL_USER</li>
                                                    <li>EMAIL_PASS</li>
                                                </ul>
                                            </li>
                                            <li>Si se utiliza otro servicio
                                                <ul className="list-disc ml-5">
                                                    <li>EMAIL_HOST</li>
                                                    <li>EMAIL_PORT</li>
                                                    <li>EMAIL_USER</li>
                                                    <li>EMAIL_PASS</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>Comando npm run dev dentro de cada carpeta</li>
                    <li>Conectarse a las Urls</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-title dark:text-title-dark mt-5" >Mejoras a futuro</h2>
                <ul className="list-disc ml-5 text-lg font-medium mt-5">
                    <li className="mb-2">Crear el backend pero con Arquitectura hexagonal y value objects. Además, me 
                        gustaría añadir tests para, en un futuro artículo, mostrar las ventajas de 
                        utilizar arquitectura hexagonal y qué estrategia de testing seguí para realizar tests.</li>

                    <li className="mb-2">Mejorar el diseño de la aplicación, añadir nuevos modales para buscar un usuario 
                        y para cambiar la imagen de perfil.</li>

                    <li className="mb-2">Crear un logger para guardar en una base de datos todos aquellos “datos” que se 
                        puedan utilizar para métricas, como por ejemplo, a qué hora los usuarios envían
                         más mensajes o con qué frecuencia cambian la foto de perfil.</li>
                </ul>
                
            </section>

            <section>
                <h2 className="text-2xl font-bold text-title dark:text-title-dark my-5 " >Galería de Imágenes</h2>
                <div className="flex items-center justify-center flex-wrap gap-3">
                    <img className="border border-white rounded-md" loading="lazy" src="/ProjectImages/RealTimeChat/ChatPC.webp" alt="Chat versión PC" />
                    <img className="border border-white rounded-md" loading="lazy" src="/ProjectImages/RealTimeChat/ChatList.webp" alt="Lista de chats en el móvil" />
                    <img className="border border-white rounded-md" loading="lazy" src="/ProjectImages/RealTimeChat/ChatMobile.webp" alt="Chat versión móvil" />
                    <img className="border border-white rounded-md" loading="lazy" src="/ProjectImages/RealTimeChat/IniciarSesion.webp" alt="Iniciar sesión PC" />
                    <img className="border border-white rounded-md" loading="lazy" src="/ProjectImages/RealTimeChat/CrearCuenta.webp" alt="Crear cuenta PC" />
                </div>
            </section>
        
        </main>
    )


}

export default RealTimeChatLanding