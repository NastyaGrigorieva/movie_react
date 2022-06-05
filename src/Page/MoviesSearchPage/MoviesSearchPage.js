import React from "react";
import {useSelector} from "react-redux";

import css from "./MoviesSearchPage.module.css";
import {SearchMovie} from "../../Components";

const MovieSearchPage = () => {

    const {search} = useSelector(state => state.movies);
    const searchMovies = search.results;

    return (
        <div>
            <h3 className={css.title}>All search movies</h3>
            {searchMovies &&
                <div className={css.flex}>{searchMovies.map(searchMovie => <SearchMovie key={searchMovie.id} searchMovie={searchMovie}/>)}</div>}
        </div>
    );
};

export {MovieSearchPage};