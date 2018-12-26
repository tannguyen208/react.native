import {
  createStackNavigator,
} from 'react-navigation';

/** screens */
import {
  Bookmarks,
  Home,
  Profile,
  Private,
} from '../../containers';

export const BookmarkStack = createStackNavigator({
  Bookmarks,
});

export const HomeStack = createStackNavigator({
  Home,
});

export const ProfileStack = createStackNavigator({
  Profile,
});

export const PrivateStack = createStackNavigator({
  Private,
});
