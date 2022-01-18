import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const moviesState = {
    fetchingAction: "Most popular movies",
    movies: [],
    isLoading: false,
    error: null
};

const moviesReducer = (state = moviesState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MODE_CHANGED:
            return { ...state, fetchingAction: action.payload }
        case actionTypes.FETCH_MOVIES:
            return { ...state, isLoading: true, error: null }
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return { ...state, movies: action.payload, error: null, isLoading: false };
        case actionTypes.FETCH_MOVIES_FAILED:
            return { ...state, error: action.payload, isLoading: false };
        default: return state
    }
}

const wikipediaExtractState = {
    movieExtract: null,
    name: "",
    isLoading: false,
    error: null
};

const wikipediaExtractReducer = (state = wikipediaExtractState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WIKIPEDIA_EXTRACT:
            return { ...state, isLoading: true, error: null }
        case actionTypes.FETCH_WIKIPEDIA_EXTRACT_SUCCESS:
            return { ...state, movieExtract: action.payload.movieExtract, name: action.payload.name, error: null, isLoading: false };
        case actionTypes.FETCH_WIKIPEDIA_EXTRACT_FAILED:
            return { ...state, error: action.payload, isLoading: false };
        default: return state
    }
}


const rootReducer = combineReducers({
    movies: moviesReducer,
    wikipediaExtract: wikipediaExtractReducer
});

export default rootReducer;