import React from 'react';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { default as AppNavigator } from './navigators';
import { connect } from 'react-redux';

export const routerReducer = createNavigationReducer(AppNavigator);
export const routerMiddleware = createReactNavigationReduxMiddleware('root', state => state.router);

const Reduxify = reduxifyNavigator(AppNavigator, 'root');

@connect(({ dispatch, router }) => ({ dispatch, router }))
class Router extends React.PureComponent {
  render = () => {
    let { dispatch, router } = this.props;

    return <Reduxify dispatch={dispatch} state={router} />;
  }
}

export default Router;
