import {
  createStackNavigator
} from 'react-navigation';
import {
  Home,
} from '../../../containers'
import { colors } from '../../../configs';
import { transitionConfig } from '../../../utils';

const routeConfigMap = {
  Home,
}
const navigationRouteConfigMap = {
  initialRouteName: 'Home',
  transitionConfig,
  cardStyle: {
    backgroundColor: colors.bgr_fafafd,
  },
}
const HomeStack = createStackNavigator(routeConfigMap, navigationRouteConfigMap);

export default HomeStack;
