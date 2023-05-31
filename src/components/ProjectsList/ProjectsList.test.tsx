import {render, screen, within} from "@testing-library/react";
import {ProjectsList} from "@components/ProjectsList/ProjectsList.tsx";
import {Project} from "@domain/Entities/Project.tsx";

describe("ProjectsList", () => {
    /*
    *
    * 1. Renders a list of projects
    * 2. Renders an error message when list is empty
    *
    */

    it("renders a list of projects", function () {

        const list: Project[] = [new Project("https://www.github.com", "Portfolio", "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content", "https://robertodelpino.netlify.com", "")]

        render(<ProjectsList  list={list}/>)

        const projectListSection = screen.getByRole("region", {name: "Project List Section"})
        const allProjects = within(projectListSection).getAllByRole("article", {name: "Project"})

        expect(allProjects).not.toBe(null)
    });
})