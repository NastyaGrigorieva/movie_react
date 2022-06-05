import axios from "axios";
import baseURL from "../constant/urls";


const axiosService = axios.create({
    baseURL,
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
})

export {axiosService}