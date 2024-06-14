import { Project } from "@domain/Entities/Project";
import { realTimeChatLanding } from "./Technologies";

const Projects : Project[] = [
    new Project(
        "https://github.com/RobertoDelPino/Real-Time-Chat",
        "Real Time Chat App",
        "Aplicación de chat en tiempo real creada con React, Node.js, Express, MongoDB y Socket.io. Además, está desplegado utilizando Docker Compose.",
        "http://chat-prueba.online",
        "/ProjectsPhotos/realTimeChat.webp",
        "/projects/realtimechat",
        realTimeChatLanding.backendTechList
            .concat(realTimeChatLanding.frontendTechList)
            .concat(realTimeChatLanding.toolsTechList)
    ),

]

export default Projects;