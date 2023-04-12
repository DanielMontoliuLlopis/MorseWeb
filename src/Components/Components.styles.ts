import styled from "styled-components";

export const Init=styled.div`
    background-color: #e2e2e2;
    min-height: 100vh;
    padding-top: 15px;
`;

export const Title=styled.h1`
    margin-top: 0%;
    font-family: 'Courier New', Courier, monospace;
    @keyframes colorChanger {
        0% {color: black}
        50% {color: gray}
        100% {color: white}
    }
    animation: colorChanger 3s linear infinite;
    font-size: 50px;
`;

export const TitleOfComponents=styled.h3`
    margin-top: 0%;
    @keyframes colorChanger {
        0% {color: black}
        50% {color: gray}
        100% {color: white}
    }
    animation: colorChanger 3s linear infinite;
`;

export const Button=styled.button`
    color: blue;
    background-color: azure;
    border: 3px double azure ;
    border-radius: 12px;
    margin-left: 10px;
    &:hover{
        background-color: black;
        color: white;
    }
`;

export const DivWithTranslatorComponents= styled.div`
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 600px) {
        display: block;
        justify-content: center;
    }
    
`

export const DivWithTranslatorComponent= styled.div`
    background-color: white;
    border-radius: 12px;
    flex: 50%;
    margin: 5px 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 20px;

    @media screen and (max-width: 600px) {
        margin: 30px;
    }
`;