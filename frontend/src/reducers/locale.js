const SET_LOCALE = 'locale/SET_LOCALE';

// Reducer

export default function reducer(state = {}, action) {
    switch (action.type) {
        case SET_LOCALE:
            return {
                currentLocale: action.locale
            };
        default:
            return state;
    }
}

// Actions

export function setLocale(locale) {
    return {
        type: SET_LOCALE,
        locale
    }
}