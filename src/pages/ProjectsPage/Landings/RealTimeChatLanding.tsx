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
                    <p className="mt-5 text-lg font-bold">30-01-24</p>
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
                <h2 className="text-2xl font-bold text-title dark:text-title-dark mt-5" >Galería de Imágenes</h2>
                <div className="flex items-center justify-center flex-wrap gap-3">
                    <img loading="lazy" src="/ProjectImages/RealTimeChat/ChatPC.webp" alt="Chat versión PC" />
                    <img loading="lazy" src="/ProjectImages/RealTimeChat/ChatList.webp" alt="Lista de chats en el móvil" />
                    <img loading="lazy" src="/ProjectImages/RealTimeChat/ChatMobile.webp" alt="Chat versión móvil" />
                    <img loading="lazy" src="/ProjectImages/RealTimeChat/IniciarSesion.webp" alt="Iniciar sesión PC" />
                    <img loading="lazy" src="/ProjectImages/RealTimeChat/CrearCuenta.webp" alt="Crear cuenta PC" />
                </div>
            </section>
        
        </main>
    )


}

export default RealTimeChatLanding