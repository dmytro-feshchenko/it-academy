import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import authentication from './authentication';
import courses from './courses';
import blog from './blog';
import locale from './locale';

export default combineReducers({
    authentication,
    courses,
    blog,
    locale,
    routing
})