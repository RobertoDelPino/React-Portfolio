import {render} from "@testing-library/react";
import {About} from "@pages/About/About.tsx";
import {expect} from "vitest";

describe("About page", () => {
    it("renders correctly", function () {
        const {container} = render(<About />)

        expect(container).toBeInTheDocument()
    });
})