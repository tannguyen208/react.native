import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { navigationService } from '../utils';

import { default as Auth } from './Auth';
import { default as Main } from './Main';

const routeConfigs = {
  Main: { screen: Main },
  Auth: { screen: Auth },
};
const switchNavigatorConfig = {};

const AppNavigator = createSwitchNavigator(routeConfigs, switchNavigatorConfig);
const AppContainer = createAppContainer(AppNavigator);

export default class extends React.Component {
  static router = {
    ...AppContainer.router,
    getStateForAction: (action, lastState) => {
      return AppContainer.router.getStateForAction(action, lastState);
    },
  };

  render = () => <AppContainer {...this.props} ref={navigationService.setTopLevelNavigator} />;
};
