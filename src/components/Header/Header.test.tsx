import {render, screen} from "@testing-library/react";
import {Header} from "@components/Header/Header.tsx";
import {expect} from "vitest";

describe("Header", () => {
    it("renders correctly", function () {
        const {container} = render(<Header/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });

    it("contains navbar component", function () {
        render(<Header/>)

        const navbar = screen.getByRole("navigation")

        expect(navbar).toBeInTheDocument()

    });

    it("contains title page", function () {
        render(<Header/>)

        const title = screen.getByRole("heading")

        expect(title).toBeInTheDocument()
    });

})