const baseURL = "https://api.themoviedb.org/3";
const apiKey = process.env.REACT_APP_API_KEY
export const key = "?api_key=d1e2811804d84df389af5313b51c3f9d";

export const urls = {

    movies: `/discover/${apiKey}`,
    movie: '/movie',
    search: '/search/movie',
    genres: '/genre/movie/list'
}
export {apiKey};
export default baseURL;
