import { workday, WorkExperience } from "@domain/Interfaces/WorkExperience";

const WorkExperiencies : WorkExperience[] = [
    {
        name: "Web developer",
        company: "SaludOnNet",
        urlCompany: "https://www.saludonnet.com/",
        time: "Junio 2023 - Actualidad",
        workplace: "San Cristóbal de La Laguna",
        workday: workday.FullTime,
        description: "Aplicando Arquitectura Hexagonal, TDD y CQRS para conseguir una infraestructura simple y mantenible. Trabajo con .NET, Entity Framework, SQL, Javascript, GIT,  RabbitMQ, Jenkins para CI/CD, Redis y  ElasticSearch."
    },
    {
        name: "Prácticas de Web Developer",
        company: "LeanMind",
        urlCompany: "https://www.leanmind.es",
        time: "Marzo 2023 - Mayo 2023",
        workplace: "San Cristóbal de La Laguna",
        workday: workday.FullTime,
        description: "Aprendiz. Durante este tiempo estuve realizando diferentes ejercicios y proyectos en donde apliqué arquitectura hexagonal y  metodologías ágiles como TDD y pair/mob programming."
    }
]

export default WorkExperiencies;