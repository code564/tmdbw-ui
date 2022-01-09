import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES:
        case actionTypes.SEARCH_MOVIES:
            return action.payload;
        default: return state
    }
}

const rootReducer = combineReducers({
    movies: moviesReducer
});

export default rootReducer;