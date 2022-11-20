import axios from 'axios';

const BASE_URL = "https://vodafone-case-api.herokuapp.com/api";

export function api(){
        return axios.create({
        baseURL: BASE_URL,
    })
    
}
