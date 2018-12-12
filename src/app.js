/**
 * @author tanna
 * @format
 * @flow
 */
import React from 'react';
import { name as appName } from '../app.json';
import { AppRegistry } from 'react-native';

import { dva } from './utils';
import Router, { routerMiddleware, routerReducer } from './router';
import countModel from './models/count';

const initialState = {};
const models = [
  countModel
];
const extraReducers = {
  router: routerReducer
};
const onAction = [
  routerMiddleware
];
const onError = e => console.log('onError', e);

const app = dva({ initialState, models, extraReducers, onAction, onError });
const App = app.start(<Router />);

AppRegistry.registerComponent(appName, () => App);
