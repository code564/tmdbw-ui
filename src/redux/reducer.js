import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const moviesReducer = (state = { movies: [], isLoading: false, error: null }, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES:
            return { ...state, isLoading: true }
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return { ...state, movies: action.payload };
        case actionTypes.FETCH_MOVIES_FAILED:
            return { ...state, error: action.payload };
        default: return state
    }
}

const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;