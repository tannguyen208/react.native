import { Animated, Easing } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {
  Login,
  Home,
} from '../containers';

const routeConfigMap = {
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  },
};

const stackConfig = {
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

export default createStackNavigator(routeConfigMap, stackConfig);
