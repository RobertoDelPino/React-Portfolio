import {render} from "@testing-library/react";

describe("NavBar", () => {
    it("renders correctly", function () {
        const {container} = render(<NavBar/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });
})