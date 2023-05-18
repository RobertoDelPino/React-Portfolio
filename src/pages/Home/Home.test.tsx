import {render} from "@testing-library/react";
import { Home } from "./Home";
import {expect} from "vitest";

describe("Home", () => {
    it("renders correctly", () => {
        const { container } = render(<Home />)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });
})