import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  createBottomTabNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  BookmarkStack,
  HomeStack,
  PrivateStack,
  ProfileStack
} from './StacksNavigator';
import { App } from '../../components';

/** **********************************************
 * bottom tab navigators
 */
const bottonTabRouteConfig = {
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={'home'}
          color={tintColor}
          size={22}
        />
      ),
    },
  },
  Bookmark: {
    screen: BookmarkStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={'bookmark'}
          color={tintColor}
          size={22}
        />
      ),
    },
  },
  MultiBar: {
    screen: () => null,
    navigationOptions: {
      tabBarIcon: <App.MultiBarNavigator />
    },
    params: {
      navigationDisabled: true
    },
  },
  Private: {
    screen: PrivateStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={'address-book'}
          color={tintColor}
          size={22}
        />
      ),
    },
  },
  Profile: {
    screen: ProfileStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={'user'}
          color={tintColor}
          size={22}
        />
      ),
    },
  },
};
const bottonTabNavigationRouteConfig = {
  tabBarOptions: {
    showLabel: false,
    activeTintColor: '#F8F8F8',
    inactiveTintColor: '#586589',
    style: {
      backgroundColor: '#171F33'
    },
    tabStyle: {}
  }
};
const MainScreen = createBottomTabNavigator(bottonTabRouteConfig, bottonTabNavigationRouteConfig)

export default MainScreen;
