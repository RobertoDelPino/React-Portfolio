import {render, screen} from "@testing-library/react";
import { Home } from "./Home";
import {expect} from "vitest";

describe("Home", () => {
    it("renders correctly", () => {
        const { container } = render(<Home />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });

    it("has a header", () => {
        render(<Home />)

        const header = screen.getByRole("navigation")

        expect(header).toBeInTheDocument()
    })

    it("has an img as a personal photo", function () {
        render(<Home />)

        const personalImg = screen.getByRole("img")

        expect(personalImg).toBeInTheDocument()
    });
})