import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./movieSlice";
import genresReducer from "./genresSlise";


const store = configureStore({

    reducer: {
        movies: movieReducer,
        genres: genresReducer
    }
})

export default store;