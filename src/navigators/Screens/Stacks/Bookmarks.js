import {
  createStackNavigator
} from 'react-navigation';
import {
  Bookmarks,
} from '../../../containers'
import { transitionConfig } from '../../../utils';

const routeConfigMap = {
  Bookmarks,
}
const navigationRouteConfigMap = {
  initialRouteName: 'Bookmarks',
  transitionConfig,
}
const BookmarksStack = createStackNavigator(routeConfigMap, navigationRouteConfigMap);

export default BookmarksStack;
