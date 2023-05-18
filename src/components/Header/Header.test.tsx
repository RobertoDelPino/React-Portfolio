import {render} from "@testing-library/react";
import {Header} from "@components/Header/Header.tsx";
import {expect} from "vitest";

describe("Header", () => {
    it("renders correctly", function () {
        const {container} = render(<Header/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });
})