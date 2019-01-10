import {
  createStackNavigator
} from 'react-navigation';
import {
  Profile,
} from '../../../containers'
import { transitionConfig } from '../../../utils';

const routeConfigMap = {
  Profile,
}
const navigationRouteConfigMap = {
  initialRouteName: 'Profile',
  transitionConfig,
}
const ProfileStack = createStackNavigator(routeConfigMap, navigationRouteConfigMap);

export default ProfileStack;
