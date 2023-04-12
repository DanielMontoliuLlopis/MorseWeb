import axios, { AxiosStatic } from 'axios'; 

class API { 
    http : AxiosStatic; 
    constructor() { 
        axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL; 
        this.http = axios; 
    } 
} 

export default new API();