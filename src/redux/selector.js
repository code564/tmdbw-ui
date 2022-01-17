import { createSelector } from 'reselect'

const selectMovies = (state) => state.movies;

export const selectMoviesList = createSelector(
    selectMovies,
    movies => movies && movies.movies
);

export const selectMoviesIsLoading = createSelector(
    selectMovies,
    movies => movies && movies.isLoading
);

export const selectMoviesError = createSelector(
    selectMovies,
    movies => movies && movies.error
);

export const selectFetchingAction = createSelector(
    selectMovies,
    movies => movies && movies.fetchingAction
);
