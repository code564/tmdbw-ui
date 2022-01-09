const USERS = [
    { id: 1, name: 'Andy', age: 32 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Tom Hulk', age: 40 },
    { id: 4, name: 'Tom Hank', age: 50 },
    { id: 5, name: 'Audra', age: 30 },
    { id: 6, name: 'Anna', age: 68 },
    { id: 7, name: 'Tom', age: 34 },
    { id: 8, name: 'Tom Riddle', age: 28 },
    { id: 9, name: 'Bolo', age: 23 },
];

export const actionTypes = {
    FETCH_MOVIES: "FETCH_MOVIES",
    SEARCH_MOVIES: "SEARCH_MOVIES"
}

export const fetchMovies = () => {
    return {
        type: actionTypes.FETCH_MOVIES,
        payload: USERS
    }
}

const filter = (keyword) => {
    if (keyword !== '') {
        const results = USERS.filter((user) => {
            return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        });
        return results
    } else {
        return USERS;
    }
};

export const searchMovies = (search) => {
    return {
        type: actionTypes.SEARCH_MOVIES,
        payload: filter(search)
    }
}