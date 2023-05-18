import {render, screen, within} from "@testing-library/react";
import {NavBar} from "@components/NavBar/NavBar.tsx";

describe("NavBar", () => {
    it("renders correctly", function () {
        const {container} = render(<NavBar/>)

        expect(container).toBeInTheDocument()
        expect(container).not.toBeEmptyDOMElement()
    });

    it("has a hamburger menu", function () {
        render(<NavBar />)

        const hamburgerIcon = screen.getByRole("graphics-document", { hidden: true })

        expect(hamburgerIcon).toBeInTheDocument()
    });

    it("contains links to other part of portfolio", function () {
        render(<NavBar />)

        const linksPagesContainer = screen.getByRole("list", { name: "links-pages-container" })
        const linkList = within(linksPagesContainer).getAllByRole("link")


        expect(linkList.length).not.toBe(0)
    });
})