import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import styles from './styles';
import { Button } from '../../components';

const propTypes = {};
const defaultProps = {};
const navigationOptions = {
  title: 'Login',
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'tanna',
      password: '123',
    };
  }

  onLogin = () => {
    let { username, password } = this.state;

    if (username === 'tanna' && password === '123') {
      const { navigate } = this.props.navigation
      navigate('Home');
    }
  }

  onChangeText = (field, text) => {
    this.setState({
      [field]: text.toLocaleLowerCase().trim(),
    });
  }

  render = () => {
    let { username, password } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          value={username}
          style={styles.input}
          placeholder={'username ...'}
          onChangeText={(text) => this.onChangeText('username', text)}
        />
        <TextInput
          secureTextEntry
          value={password}
          style={styles.input}
          placeholder={'password ...'}
          onChangeText={(text) => this.onChangeText('password', text)}
        />
        <Button text={'Login'} onPress={this.onLogin} />
      </View>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;
Login.navigationOptions = navigationOptions;

export default Login;