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

    it("contains an 'Eduacation' section", function () {
        render(<About/>)

        const eduaction = screen.getByRole("region", {name: "Education region"})

        expect(eduaction).toBeInTheDocument()
    });

    it("contains an 'Events' section", function () {
        render(<About/>)

        const eduaction = screen.getByRole("region", {name: "Events region"})

        expect(eduaction).toBeInTheDocument()
    });
})