import {axiosService} from "./axios.service";
import {urls, apiKey} from "../constant";

export  const genresService={
    getAll: ()=> axiosService.get(`${urls.genres}${apiKey}`).then(value => value.data)
}