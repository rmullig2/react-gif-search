import request from 'superagent';

export const REQUEST_GIFS = "REQUEST_GIFS";

const API_URL = 'http://api.giphy.com/vi/gifs/search?q=';
const API_KEY = '%api_key=dc6zaTOxFJmzC';

export function requestGifs(term = null) {
    const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);
    return {
        type: REQUEST_GIFS,
        payload: data
    }
}