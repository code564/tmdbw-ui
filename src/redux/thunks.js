import { QUERY_FETCH_POPULAR, QUERY_SEARCH_MOVIES } from '../graphql/graphql';
import { makeGraphqlRequest } from '../graphql/proxy';
import { actionTypes } from './actions';


export const fetchMoviesThunk = () => async (dispatch) => {
    try {
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
