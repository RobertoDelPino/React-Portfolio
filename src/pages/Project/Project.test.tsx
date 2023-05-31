import {render} from "@testing-library/react";
import {Project} from "@pages/Project/Project.tsx";

describe("Project", () => {
    it("renders correctly", function () {
        const {container} = render(<Project/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });
})