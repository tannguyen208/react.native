import React from 'react';
import { Text, View } from 'react-native';

const propTypes = {};
const defaultProps = {};
const navigationOptions = {
  title: 'Private',
};

class Private extends React.Component {
  render = () => {
    return (
      <View>
        <Text> Private </Text>
      </View>
    )
  }
}

Private.propTypes = propTypes;
Private.defaultProps = defaultProps;
Private.navigationOptions = navigationOptions;

export default Private;
