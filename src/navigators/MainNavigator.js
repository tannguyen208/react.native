import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import { Home } from '../containers';

export const HomeStack = createStackNavigator({
  Home: { screen: Home },
});

export const Main = createBottomTabNavigator({
  Home: { screen: HomeStack },
  /**
   * bottom tabs other
   */
});

/**
 * navigator configs
 */
const routeConfigs = {
  Main: { screen: Main },
};
const navigatorConfig = {};

export default createSwitchNavigator(routeConfigs, navigatorConfig);
