import { createStackNavigator } from 'react-navigation';

import Home from '../containers/Home';

const routeConfigMap = {
  Home: {
    screen: Home
  }
};

const stackConfig = {};

export default createStackNavigator(routeConfigMap, stackConfig);
