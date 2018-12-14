import { Animated, Easing } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { default as AuthNavigator } from './AuthNavigator';
import { default as MainNavigator } from './MainNavigator';

const routeConfigs = {
  Auth: AuthNavigator,
  Main: MainNavigator,
};

const switchNavigatorConfig = {
  initialRouteName: 'Auth',
  transitionSpec: {
    duration: 800,
    timing: Animated.timing,
    easing: Easing.out(Easing.poly(4)),
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const { index } = scene;
    const width = layout.initWidth;
    const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [width, 0, 0],
    });
    if (index <= 1) {
      return {};
    }

    return { transform: [{ translateX }] };
  }
};

const AppNavigator = createSwitchNavigator(routeConfigs, switchNavigatorConfig);

export {
  AuthNavigator,
  MainNavigator,
};

export default createAppContainer(AppNavigator);
