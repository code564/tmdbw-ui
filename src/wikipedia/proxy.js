import config from '../config/config';

const queryStringFromParams = (params) => {
    let queryString = ``;
    for (const param in params) {
        queryString = `${queryString}&${param}=${params[param]}`;
    }
    return queryString;
};

export const makeWikipediaQueryApiRequest = async (movieTitle) => {
    try {
        const params = {
            action: "query",
            prop: "extracts",
            titles: movieTitle,
            format: "json"
        };
        const apiUrl = `${config.wikipediaApiEndpoint}?origin=*&exintro&explaintext${queryStringFromParams(params)}`;
        const response = await fetch(apiUrl);
        if (response.status !== 200) return { error: 'Invalid request' };
        if (!response.body) return { error: 'No data returned' };
        const queryResult = await response.json();
        return queryResult;
    } catch (e) {
        return { error: e.message };
    }
};