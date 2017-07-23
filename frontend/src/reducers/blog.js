const FETCH = 'blog/FETCH';
const FETCH_SUCCESS = 'blog/FETCH_SUCCESS';
const FETCH_FAIL = 'blog/FETCH_FAIL';

const initialState = {
    loaded: false,
    error: null,
    items: []
};

// Reducer

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                loaded: true,
                items: action.result.data._embedded.articles,
            };
        case FETCH_FAIL:
            return {
                items: [],
                loaded: true,
                error: action.result.error
            };
        default:
            return state;
    }
}

// Actions

export function fetchArticles() {
    return {
        types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
        promise: client => client.get('api/blog')
    }
}