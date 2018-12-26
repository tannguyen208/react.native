import {
  createStackNavigator,
} from 'react-navigation';

/** screens */
import { Login } from '../../containers';

const routeConfigMap = {
  Login: { screen: Login }
};
const NavigationRouteConfigMap = {};

const AuthScreen = createStackNavigator(routeConfigMap, NavigationRouteConfigMap)

export default AuthScreen;
