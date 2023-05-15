import axios from "axios";

axios.defaults.withCredentials = true;

export const requests = axios.create({
    baseURL:'/api',
});