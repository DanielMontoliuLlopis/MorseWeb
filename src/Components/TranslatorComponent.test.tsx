import React from "react";
import TranslatorComponent from "./TranslatorComponent";
import { fireEvent, render } from "@testing-library/react";


test("Renderiza el componente", ()=>{
    const component= render(<TranslatorComponent title="" handle={()=>{}}/>);

    expect(component!=null).toBeTruthy
})

test("Recive the title", ()=>{
    const title="Cosa"
    const component= render(<TranslatorComponent title={title} handle={()=>{}}/>);

    
    expect(component.getByText(title)).toBeInTheDocument
})

test("Recive function", ()=>{
    const spy=jest.fn()
    const component= render(<TranslatorComponent title="Cosa" handle={spy}/>);

    fireEvent.click(component.getByText("Send"))
    
    expect(spy).toBeCalledTimes(1) 
})

test("Have Input", ()=>{
    const component= render(<TranslatorComponent title="Cosa" handle={()=>{}}/>);

    expect(component.getByPlaceholderText("Text to Traduce")).toBeInTheDocument
})

test("Test Hooks", ()=>{
    const spy=jest.fn()
    const component= render(<TranslatorComponent title="Cosa" handle={spy}/>);

    fireEvent.change(component.getByPlaceholderText("Text to Traduce"), {
       target:{ value: 'a'}
    });
    fireEvent.click(component.getByText("Send"));
    
    expect(spy).toBeCalledWith('a');
})

