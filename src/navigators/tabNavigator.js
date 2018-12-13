import { createBottomTabNavigator } from 'react-navigation';
import {
  Home,
} from '../containers';

const routeConfigMap = {
  Home: {
    screen: Home
  },
};

const tabConfig = {};

export default createBottomTabNavigator(routeConfigMap, tabConfig);
