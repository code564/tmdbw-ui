import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const moviesState = {
    movies: [],
    isLoading: false,
    error: null
};

const moviesReducer = (state = moviesState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES:
            return { ...moviesState, isLoading: true }
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return { ...moviesState, movies: action.payload };
        case actionTypes.FETCH_MOVIES_FAILED:
            return { ...moviesState, error: action.payload };
        default: return state
    }
}

const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;