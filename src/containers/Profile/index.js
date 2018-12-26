import React from 'react';
import { Text, View } from 'react-native';

const propTypes = {};
const defaultProps = {};
const navigationOptions = {
  title: 'Profile',
};

class Profile extends React.Component {
  render = () => {
    return (
      <View>
        <Text> Profile </Text>
      </View>
    )
  }
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;
Profile.navigationOptions = navigationOptions;

export default Profile;
