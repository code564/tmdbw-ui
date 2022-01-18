import { QUERY_FETCH_POPULAR, QUERY_SEARCH_MOVIES, QUERY_GET_SIMILAR_MOVIES } from '../graphql/graphql';
import { makeGraphqlRequest } from '../graphql/proxy';
import { actionTypes } from './actions';
import { makeWikipediaQueryApiRequest } from '../wikipedia/proxy';

const getFirstMatchingPageDataFromResultPages = (resultPages, pageTitle) => {
    for (const pageId in resultPages) {
        const resultPage = resultPages[pageId];
        if (resultPage.title === pageTitle) return resultPage;
    }
    return null;
}

const getMovieExtractOrNull = (queryResult, pageTitle) => {
    let movieExtract = null;
    const resultPages = (queryResult && queryResult.query && queryResult.query.pages) || null;
    if (resultPages) {
        if (resultPages['-1']) return movieExtract;
        const pageData = getFirstMatchingPageDataFromResultPages(resultPages, pageTitle);
        movieExtract = (pageData && pageData.extract) || null;
    }
    return movieExtract;
}

export const fetchMoviesThunk = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.FETCH_MODE_CHANGED, payload: "Most popular movies" });
        dispatch({ type: actionTypes.FETCH_MOVIES });
        const result = await makeGraphqlRequest(QUERY_FETCH_POPULAR);
        if (!result.error && result.data) {
            dispatch({ type: actionTypes.FETCH_MOVIES_SUCCESS, payload: result.data.movies });
        } else {
            dispatch({ type: actionTypes.FETCH_MOVIES_FAILED, payload: result.error });
        }
    } catch (e) {
        dispatch({ type: actionTypes.FETCH_MOVIES_FAILED, payload: "Error fetching movies" });
    }
};

export const searchMoviesThunk = (query) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.FETCH_MODE_CHANGED, payload: `Movies matching "${query}"` });
        dispatch({ type: actionTypes.FETCH_MOVIES });
        const result = await makeGraphqlRequest(QUERY_SEARCH_MOVIES(query));
        if (!result.error && result.data) {
            dispatch({ type: actionTypes.FETCH_MOVIES_SUCCESS, payload: result.data.searchMovies });
        } else {
            dispatch({ type: actionTypes.FETCH_MOVIES_FAILED, payload: result.error });
        }
    } catch (e) {
        dispatch({ type: actionTypes.FETCH_MOVIES_FAILED, payload: "Error searching movies" });
    }
};

export const getSimilarMoviesThunk = (id, name) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.FETCH_MODE_CHANGED, payload: `Similar movies to "${name}"` });
        dispatch({ type: actionTypes.FETCH_MOVIES });
        const result = await makeGraphqlRequest(QUERY_GET_SIMILAR_MOVIES(id));
        if (!result.error && result.data && result.data.movie) {
            dispatch({ type: actionTypes.FETCH_MOVIES_SUCCESS, payload: result.data.movie.similar });
        } else {
            dispatch({ type: actionTypes.FETCH_MOVIES_FAILED, payload: result.error });
        }
    } catch (e) {
        dispatch({ type: actionTypes.FETCH_MOVIES_FAILED, payload: "Error getting similar movies" });
    }
};

export const getMovieWikipediaExtract = (name) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.FETCH_WIKIPEDIA_EXTRACT });
        const result = await makeWikipediaQueryApiRequest(name);
        if (!result.error && result.query) {
            const movieExtract = getMovieExtractOrNull(result, name);
            const payload = { movieExtract, name };
            dispatch({ type: actionTypes.FETCH_WIKIPEDIA_EXTRACT_SUCCESS, payload });
        } else {
            dispatch({ type: actionTypes.FETCH_WIKIPEDIA_EXTRACT_FAILED, payload: result.error });
        }
    } catch (e) {
        dispatch({ type: actionTypes.FETCH_WIKIPEDIA_EXTRACT_FAILED, payload: "Error getting Wikipedia extract" });
    }
}
