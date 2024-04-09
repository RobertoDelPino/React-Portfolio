import { Project } from "@domain/Entities/Project";

const Projects : Project[] = [
    new Project(
        "https://github.com/RobertoDelPino/Real-Time-Chat",
        "Real Time Chat App",
        "Aplicación de chat en tiempo real creada con React, Node.js, Express, MongoDB y Socket.io. Además, está desplegado utilizando Docker Compose.",
        "http://chat-prueba.online",
        "/ProjectsPhotos/realTimeChat.webp",
        "/projects/realtimechat"),
    new Project(
        "https://github.com/RobertoDelPino/React-Portfolio",
        "Mi portfolio",
        "Te presento el código de esta página, mi portfolio. Si deseas enviarme cualquier feedback contacta conmigo a través de mi correo.",
        "https://robertodelpino.dev",
        "/ProjectsPhotos/RobertoProject.webp",
        "/projects"),
    new Project(
        "https://github.com/RobertoDelPino/Javascript-Course-Projects",
        "Proyetos de aprendizaje de Javascript",
        "Aqui podrás ver todos los proyectos en los que he estado trabajando para poder aprender y mejorar en Javascript",
        "https://github.com/RobertoDelPino/Javascript-Course-Projects",
        "/ProjectsPhotos/javascriptProjects.webp",
        "/projects")
]

export default Projects;