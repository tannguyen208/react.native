import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import Styles from './styles';
import Routes from '../../navigators/Routes';
import {
  Button,
} from '../../components';

const propTypes = {};
const defaultProps = {};
const navigationOptions = {
  header: null,
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
      navigate(Routes.TabsHome);
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
      <View style={Styles.container}>
        <TextInput
          value={username}
          style={Styles.input}
          placeholder={'username ...'}
          onChangeText={(text) => this.onChangeText('username', text)}
        />
        <TextInput
          secureTextEntry
          value={password}
          style={Styles.input}
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