import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import initStore from './config/store';
import setupAxiosInterceptors from './rest/axios';
import { browserHistory } from 'react-router';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import getRoutes from './router/router';

import '../assets/styles/style.scss';

const store = initStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history} routes={getRoutes()} />
        </div>
    </Provider>,
    document.getElementById('react')
);