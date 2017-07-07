import React from 'react';
import reducer from '../reducers';
import { createStore, applyMiddleware, compose } from 'redux';

import promiseMiddleware from './promiseMiddleware';

const middlewares = process.ENV.NODE_ENV === "development" ?
    [applyMiddleware(promiseMiddleware)] :
    [applyMiddleware(promiseMiddleware)];

/**
 * Creates store
 * @param initialState
 * @returns {*} created store
 */
const initialize = (initialState = {}) => {
    return createStore(reducer, initialState, compose(...middlewares));
};

export default initialize;