import React from 'react';
import { Text, View } from 'react-native';

const propTypes = {};
const defaultProps = {};
const navigationOptions = {
  title: 'Bookmarks',
};

class Bookmarks extends React.Component {
  render = () => {
    return (
      <View>
        <Text> Bookmarks </Text>
      </View>
    )
  }
}

Bookmarks.propTypes = propTypes;
Bookmarks.defaultProps = defaultProps;
Bookmarks.navigationOptions = navigationOptions;

export default Bookmarks;
