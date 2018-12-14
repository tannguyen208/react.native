import {
  createStackNavigator,
} from 'react-navigation';

import { Login } from '../containers';

/**
 * navigator configs
 */
const routeConfigs = {
  Login: {
    screen: Login
  },
};
const navigatorConfig = {};

export default createStackNavigator(routeConfigs, navigatorConfig);