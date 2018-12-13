import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';
import { Button } from '../../components';

const propTypes = {};
const defaultProps = {};
const navigationOptions = {
  title: 'Login',
};

class Login extends React.Component {
  render = () => {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Button text={'Login'} onPress={() => navigate('Home', { name: 'tanna' })} />
      </View>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
Login.navigationOptions = navigationOptions;

export default Login;