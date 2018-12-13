import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { default as drawerNavigator } from './drawerNavigator';
import { default as stackNavigator } from './stackNavigator';
import { default as tabNavigator } from './tabNavigator';

const routeConfigs = {
  Drawer: drawerNavigator,
  Stack: stackNavigator,
  Tab: tabNavigator,
};

const switchNavigatorConfig = {
  initialRouteName: 'Stack',
};

const AppNavigator = createSwitchNavigator(routeConfigs, switchNavigatorConfig);

export {
  drawerNavigator,
  stackNavigator,
  tabNavigator,
};

export default createAppContainer(AppNavigator);
