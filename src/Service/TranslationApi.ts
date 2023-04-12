import api from './Api'; 
import { AxiosResponse } from 'axios'; 

const URL_TO_MORSE="http://localhost:8080/ToMorseTranslator/";
const URL_TO_STRING="http://localhost:8080/ToStringTranslator/";

class TranslationApi { 
    translateToMorse = (text: string) : Promise<AxiosResponse> => 
    api.http.get(URL_TO_MORSE+text); 

    translateToString = (text: string) : Promise<AxiosResponse> => 
    api.http.get(URL_TO_STRING+text); 
} 

export default new TranslationApi();