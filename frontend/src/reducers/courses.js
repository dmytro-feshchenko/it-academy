const FETCH = 'courses/FETCH';
const FETCH_SUCCESS = 'courses/FETCH_SUCCESS';
const FETCH_FAIL = 'courses/FETCH_FAIL';

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
                items: action.result.data,
                loaded: true
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

export function fetchCourses() {
    return {
        types: [FETCH, FETCH_SUCCESS, FETCH_FAIL],
        promise: client => client.get('api/courses')
    }
}