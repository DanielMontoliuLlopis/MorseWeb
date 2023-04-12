import React, { useState } from "react";
import TranslatorComponent from "../Components/TranslatorComponent";
import TranslationApi from "../Service/TranslationApi";
import { DivWithTranslatorComponents, DivWithTranslatorComponent, Title, Init } from "../Components/Components.styles";



const InitPage: React.FC = () => {

    const [translatedToMorse, setTranslatedToMorse]=useState("")
    const [translatedToEng, setTranslatedToEng]=useState([])

    const translateToMorse = (text: string) => {
        TranslationApi.translateToMorse(text)
        .then(response =>
             {setTranslatedToMorse( response.data[0])})
             .catch(error => console.log(error))
    }

    const translateToEng = (text: string) => {
        TranslationApi.translateToString(text)
        .then(response =>{setTranslatedToEng(response.data)})
        .catch(error => console.log(error))
    }


    return (
        <Init>
            <Title>Translator</Title>
            <DivWithTranslatorComponents>
                <DivWithTranslatorComponent>
                    <TranslatorComponent title="Translator to morse" handle={translateToMorse}/>
                    <p>{translatedToMorse}</p>
                </DivWithTranslatorComponent>
                <DivWithTranslatorComponent>
                    <TranslatorComponent title="Translator to String" handle={translateToEng}></TranslatorComponent>
                    <p/>
                    {translatedToEng.map( (translatedText, key) => <p key={key}> Translated: {translatedText} {key}</p>)}
                </DivWithTranslatorComponent>
            </DivWithTranslatorComponents>
        </Init>
    )
}

export default InitPage