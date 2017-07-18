import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import authentication from './authentication';
import courses from './courses';

export default combineReducers({
    authentication,
    courses,
    routing
})