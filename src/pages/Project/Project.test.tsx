import {render} from "@testing-library/react";

describe("Project", () => {
    it("renders correctly", function () {
        const {container} = render(<Project/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });
})