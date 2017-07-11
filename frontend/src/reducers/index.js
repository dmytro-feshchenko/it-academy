import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import authentication from './authentication';

export default combineReducers({
    authentication,
    routing
})