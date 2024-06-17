import { Project } from "@domain/Entities/Project";
import { realTimeChatLanding, realTimeChaBackendtRefactorLanding } from "./Technologies";

const Projects : Project[] = [
    new Project(
        "https://github.com/RobertoDelPino/RealTimeChatBackend-Typescript",
        "Refactor Backend Real Time Chat",
        "Refactorización del backend de la aplicación de chat en tiempo real creada con Typescript. Se ha utilizado Arquitectura Hexagonal y TDD.",
        "/ProjectsPhotos/realTimeChat.webp",
        "/projects",
        realTimeChaBackendtRefactorLanding.backendTechList
            .concat(realTimeChaBackendtRefactorLanding.frontendTechList)
            .concat(realTimeChaBackendtRefactorLanding.toolsTechList)
    ),
    new Project(
        "https://github.com/RobertoDelPino/Real-Time-Chat",
        "Real Time Chat App",
        "Aplicación de chat en tiempo real creada con React, Node.js, Express, MongoDB y Socket.io. Además, está desplegado utilizando Docker Compose.",
        "/ProjectsPhotos/realTimeChat.webp",
        "/projects/realtimechat",
        realTimeChatLanding.backendTechList
            .concat(realTimeChatLanding.frontendTechList)
            .concat(realTimeChatLanding.toolsTechList)
    )
]

export default Projects;