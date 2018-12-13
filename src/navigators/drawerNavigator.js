import { createDrawerNavigator } from 'react-navigation';
import {
  Home,
} from '../containers';

const routeConfigMap = {
  Home: {
    screen: Home
  },
};

const drawerConfig = {};

export default createDrawerNavigator(routeConfigMap, drawerConfig);
