import {render, screen} from "@testing-library/react";
import {ProjectsPage} from "@pages/ProjectsPage/ProjectsPage.tsx";

describe("ProjectPage", () => {
    it("renders correctly", function () {
        const {container} = render(<ProjectsPage/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });

    it("contains ProjectList section", function () {
        render(<ProjectsPage/>)

        const projectListSection = screen.getByRole("region", {name: "Project List Section"})

        expect(projectListSection).toBeInTheDocument()
    });
})