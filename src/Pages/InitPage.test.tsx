import { render } from "@testing-library/react";
import InitPage from "./InitPage";


test("Render init page", ()=>{
    const component=render(<InitPage/>);

    expect(component!=null).toBeTruthy;
})

test("Title Init Page", ()=>{
    const component=render(<InitPage/>);

    expect(component.getByText("Morse Translator")).toBeInTheDocument

})
