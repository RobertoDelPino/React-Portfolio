import { ITechnology } from "@domain/Interfaces/ITechnology";

export const frontendTechList: ITechnology[] = [
    {
        name: "HTML",
        image: "TechIcons/html-5.svg"
    },
    {
        name: "CSS",
        image: "TechIcons/css-3.svg"
    },
    {
        name: "Javascript",
        image: "TechIcons/javascript.svg"
    },
    {
        name: "Tailwind",
        image: "TechIcons/tailwind.svg"
    },
    {
        name: "React",
        image: "TechIcons/react.svg"
    },
    {
        name: "Typescript",
        image: "TechIcons/typescript.svg"
    },
]

export const backendTechList: ITechnology[] = [
    {
        name: ".NET",
        image: "TechIcons/netcore.webp"
    },
    {
        name: "SQL",
        image: "TechIcons/sql.svg"
    },
    {
        name: "Node.js",
        image: "TechIcons/nodejs.svg"
    },
    {
        name: "Express.js",
        image: "TechIcons/expressjs.svg"
    },
    {
        name: "MongoDB",
        image: "TechIcons/mongodb-icon.svg"
    },
    {
        name: "RabbitMQ",
        image: "TechIcons/rabbitmq.svg"
    },
    {
        name: "Socket.IO",
        image: "TechIcons/socketio.svg"
    }
]

export const toolsTechList: ITechnology[] = [
    {
        name: "Github",
        image: "TechIcons/github.svg"
    },
    {
        name: "Visual Studio",
        image: "TechIcons/visual-studio.webp"
    },
    {
        name: "Visual Studio Code",
        image: "TechIcons/vscode.svg"
    }
]

interface Landing {
    backendTechList: ITechnology[];
    frontendTechList: ITechnology[];
    toolsTechList: ITechnology[];
}

export const realTimeChatLanding : Landing = {
    backendTechList: [
        {
            name: "Node.js",
            image: "../../TechIcons/nodejs.svg"
        },
        {
            name: "Express.js",
            image: "../../TechIcons/expressjs.svg"
        },
        {
            name: "MongoDB",
            image: "../../TechIcons/mongodb-icon.svg"
        },
        {
            name: "Socket.IO",
            image: "../../TechIcons/socketio.svg"
        },
        {
            name: "Nodemailer",
            image: "../../TechIcons/nodemailer.png"
        }
    ],
    frontendTechList: [
        {
            name: "React",
            image: "../../TechIcons/react.svg"
        },
        {
            name: "Tailwind",
            image: "../../TechIcons/tailwind.svg"
        },
        {
            name: "Socker.IO",
            image: "../../TechIcons/socketio.svg"
        }
    ],
    toolsTechList: [
        {
            name: "Github",
            image: "../../TechIcons/github.svg"
        },
        {
            name: "Visual Studio Code",
            image: "../../TechIcons/vscode.svg"
        }
    ]
}