import {render} from "@testing-library/react";
import {NavBar} from "@components/NavBar/NavBar.tsx";

describe("NavBar", () => {
    it("renders correctly", function () {
        const {container} = render(<NavBar/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });
})