import {render, within} from "@testing-library/react";
import {TechnologiesList, Technology} from "@components/TecnologiesList/TechnologiesList.tsx";
import javascript from "../../assets/TechIcons/javascript.png"

describe("TechnologiesList", () => {
    it("show item list", function () {

        const technologies: Technology[] = [{
            name: "javascript",
            image: javascript
        }]

        const {container} = render( <TechnologiesList  list={technologies}/> )

        const techList = within(container).getAllByRole("article",{name:"technology"})

        expect(techList.length).not.toBe(0)
    });
})