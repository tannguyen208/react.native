import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Styles from './stylesheet';

const MagicTabBar = ({ style, navigation, activeTintColor, inactiveTintColor, renderIcon, jumpTo }) => {
  const {
    index,
    routes,
  } = navigation.state;

  return (
    <SafeAreaView
      pointerEvents="box-none"
      style={Styles.container}
      forceInset={{
        top: 'never',
        bottom: 'always',
      }}
    >
      <SafeAreaView
        style={[Styles.fakeBackground, style]}
        forceInset={{
          top: 'never',
          bottom: 'always',
        }}
      >
        <View style={{ height: 49 }} />
      </SafeAreaView>
      <View
        pointerEvents="box-none"
        style={Styles.content}
      >
        {
          routes.map((route, idx) => {
            const focused = index === idx;

            if (!route.params || !route.params.navigationDisabled) {
              return (
                <TabIcon
                  key={route.key}
                  route={route}
                  renderIcon={renderIcon}
                  focused={focused}
                  activeTintColor={activeTintColor}
                  inactiveTintColor={inactiveTintColor}
                  onPress={() => (!route.params || !route.params.navigationDisabled) && jumpTo(route.key)}
                />
              );
            }

            const Icon = renderIcon({
              route,
              focused,
              tintColor: focused
                ? activeTintColor
                : inactiveTintColor
            });

            return {
              ...Icon,
              key: 'simple'
            };
          })
        }
      </View>
    </SafeAreaView>
  );
};

const TabIcon = ({ route, renderIcon, focused, activeTintColor, inactiveTintColor, onPress }) => (
  <TouchableOpacity
    style={Styles.tabStyle}
    onPress={() => onPress && onPress()}
  >
    {
      renderIcon({
        route,
        focused,
        tintColor: focused
          ? activeTintColor
          : inactiveTintColor
      })
    }
  </TouchableOpacity>
);

export default MagicTabBar;
