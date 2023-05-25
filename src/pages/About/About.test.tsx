import {render, screen} from "@testing-library/react";
import {About} from "@pages/About/About.tsx";

describe("About page", () => {
    it("renders correctly", function () {
        const {container} = render(<About />)

        expect(container).toBeInTheDocument()
    });

    it("contains an 'about me' section", function () {
        render(<About/>)

        const aboutMePage = screen.getByRole("region", {name: "About me region"})

        expect(aboutMePage).toBeInTheDocument()
    });

    it("contains an 'Work experience' section", function () {
        render(<About/>)

        const workExperience = screen.getByRole("region", {name: "Work experience region"})

        expect(workExperience).toBeInTheDocument()
    });


})