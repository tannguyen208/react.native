import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { default as Routes } from '../Routes';
import { App } from '../../components';
import {
  Home,
  Bookmarks,
  Private,
  Profile,
} from '../../containers';

/** **********************************************
 * bottom tab navigators
 */
const bottonTabRouteConfig = {
  [Routes.TabsHome]: {
    screen: Home,
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
  [Routes.TabsBookmarks]: {
    screen: Bookmarks,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={'bookmark'}
          color={tintColor}
          size={22}
        />
      ),
    }),
  },
  MultiBar: {
    screen: () => null,
    navigationOptions: () => ({
      tabBarIcon: (
        <App.MultiBarNavigator
          routes={[
            {
              routeName: Routes.TabsHome,
              color: 'red'
            },
            {
              routeName: Routes.TabsBookmarks,
              color: 'green'
            },
            {
              routeName: Routes.TabsPrivate,
              color: 'blue'
            },
          ]}
        />
      )
    }),
    params: {
      navigationDisabled: true,
    },
  },
  [Routes.TabsPrivate]: {
    screen: Private,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={'address-book'}
          color={tintColor}
          size={22}
        />
      ),
    }),
  },
  [Routes.TabsProfile]: {
    screen: Profile,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={'user'}
          color={tintColor}
          size={22}
        />
      ),
    }),
  },
};
const bottonTabNavigationRouteConfig = {
  tabBarComponent: App.MagicTabBar,
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

const MainScreen = createBottomTabNavigator(bottonTabRouteConfig, bottonTabNavigationRouteConfig);

export default MainScreen;
