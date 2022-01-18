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

const selectWikipediaExtract = (state) => state.wikipediaExtract;

export const selectWikipediaExtractContent = createSelector(
    selectWikipediaExtract,
    extract => extract && extract.movieExtract
);

export const selectWikipediaExtractName = createSelector(
    selectWikipediaExtract,
    extract => extract && extract.name
);

export const selectWikipediaExtractIsLoading = createSelector(
    selectWikipediaExtract,
    extract => extract && extract.isLoading
);

export const selectWikipediaExtractError = createSelector(
    selectWikipediaExtract,
    extract => extract && extract.error
);