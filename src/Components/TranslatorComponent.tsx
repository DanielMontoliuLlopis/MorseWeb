import React, { useState } from "react";
import { Button, TitleOfComponents } from "./Components.styles";

interface IProps{
    title:string
    handle: Function
}

const TranslatorComponent:React.FC<IProps>=({
    title,
    handle
}:IProps)=>{
    const [text, setText]=useState("")
    return(
        <>
            <TitleOfComponents>{title}</TitleOfComponents>
            <input type="text" placeholder="Text to Traduce" onChange={(event)=>{
                setText(event.target.value)
            }}></input>
            <Button onClick={()=>{handle(text)}}>Send</Button>
        </>
    )
}

export default TranslatorComponent;