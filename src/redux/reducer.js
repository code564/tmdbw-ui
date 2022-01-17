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

const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;