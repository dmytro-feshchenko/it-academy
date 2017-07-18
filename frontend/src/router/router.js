import React from 'react';
import { Route } from 'react-router';
import AppContainer from '../containers/AppContainer';
import HomePageContainer from '../containers/HomePageContainer';
import CoursesListContainer from '../containers/CoursesListContainer';

export default () => (
    <Route path="" component={AppContainer}>
        <Route path="/" component={HomePageContainer} />
        <Route path="/courses" component={CoursesListContainer} />
    </Route>
)