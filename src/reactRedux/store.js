import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./SliceMovie";

const rootReducer = combineReducers({
    movies:moviesReducer
})

const store = configureStore({
    reducer:rootReducer
})

export {store};