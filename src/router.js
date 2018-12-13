import React, { PureComponent } from 'react';
import { BackHandler, Animated, Easing } from 'react-native';
import {
  createSwitchNavigator,
  NavigationActions,
} from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import drawerNavigator from './navigators/drawerNavigator';
import stackNavigator from './navigators/stackNavigator';
import tabNavigator from './navigators/tabNavigator';

const routeConfigMap = {
  Drawer: drawerNavigator,
  Stack: stackNavigator,
  Tab: tabNavigator,
};
const navigationRouteConfigMap = {};
const AppNavigator = createSwitchNavigator(routeConfigMap, navigationRouteConfigMap);

export const routerReducer = createNavigationReducer(AppNavigator);
export const routerMiddleware = createReactNavigationReduxMiddleware('root', state => state.router);

const Reduxify = reduxifyNavigator(AppNavigator, 'root');

class Router extends PureComponent {
  render = () => {
    console.log(this.props);
    let { dispatch, router } = this.props;

    return <Reduxify dispatch={dispatch} state={router} />;
  }
}

export default connect(state => ({ full: state }))(Router);
