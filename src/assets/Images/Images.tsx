import javascript from "../../assets/TechIcons/javascript.webp"
import bootstrap from "../../assets/TechIcons/bootstrap.webp"
import css from "../../assets/TechIcons/css-3.webp"
import html from "../../assets/TechIcons/html-5.webp"
import github from "../../assets/TechIcons/github.webp"
import mysql from "../../assets/TechIcons/mysql.webp"
import react from "../../assets/TechIcons/react.webp"
import typescript from "../../assets/TechIcons/typescript.webp"
import visualStudio from "../../assets/TechIcons/visual-studio.webp"
import visualStudioCode from "../../assets/TechIcons/vscode.webp"
import webstorm from "../../assets/TechIcons/webstorm.webp"
import netCore from "../../assets/TechIcons/netcore.webp"
import tailwind from "../../assets/TechIcons/tailwind.webp"
import personalPhoto from "../../assets/fotoPerfil-1.webp"
import robertoPortfolio from "@assets/ProjectsPhotos/RobertoProject.webp"
import hiriamPortfolio from "@assets/ProjectsPhotos/HiriamProject.webp"
import javascriptProjects from "@assets/javascriptProjects.webp";
import searchSymbol from "@assets/search-symbol.png";
import fakeTableResult from "@assets/BlogImages/resultado-sql-fake-table.png"
import stagesTDD from "@assets/BlogImages/tdd-stages.png"
import realTimeChat from "@assets/ProjectsPhotos/realtimechat.webp"
import tdd from "@assets/BlogImages/tdd.webp"

const IMAGES : Record<string, string> = {
    javascript: javascript,
    bootstrap: bootstrap,
    css: css,
    html: html,
    github: github,
    mysql: mysql,
    react: react,
    typescript: typescript,
    visualStudio: visualStudio,
    visualStudioCode: visualStudioCode,
    webstorm: webstorm,
    netCore: netCore,
    tailwind: tailwind,
    personalPhoto: personalPhoto,
    robertoPortfolio: robertoPortfolio,
    hiriamPortfolio: hiriamPortfolio,
    javascriptProjects: javascriptProjects,
    searchSymbol: searchSymbol,
    fakeTableResult: fakeTableResult,
    realTimeChat: realTimeChat,
    tdd: tdd,
    stagesOfTDD: stagesTDD,
}

function findImage(name: string): string{
    const imagesNames = Object.keys(IMAGES);
    const imageKey = imagesNames.find(x => x.toLowerCase().includes(name.toLowerCase()))
    return IMAGES[imageKey]
}

export {
    IMAGES,
    findImage
}