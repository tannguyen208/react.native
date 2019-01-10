import {
  createStackNavigator
} from 'react-navigation';
import {
  Private,
} from '../../../containers'
import { transitionConfig } from '../../../utils';

const routeConfigMap = {
  Private,
}
const navigationRouteConfigMap = {
  initialRouteName: 'Private',
  transitionConfig,
}
const PrivateStack = createStackNavigator(routeConfigMap, navigationRouteConfigMap);

export default PrivateStack;
