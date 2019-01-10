import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAction } from '../../utils';
import { colors } from '../../configs';

import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  App,
  Button,
} from '../../components';

import styles from './styles';

const propTypes = {};
const defaultProps = {};
const navigationOptions = {
  title: 'Home',
};

@connect((state) => ({ count: state.count }))
class Home extends React.Component {
  state = {
    positionY: 0,
  }

  onDecrement = () => {
    let { dispatch } = this.props;
    dispatch(createAction('count/decrement')(2));
  }

  onIncrement = () => {
    let { dispatch } = this.props;
    dispatch(createAction('count/increment')());
  }

  onScroll = evt => {
    this.setState({ positionY: evt.nativeEvent.contentOffset.y })
  }

  render = () => {
    let { count, navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {/* <App.Header headerStyle={{ height: 100 }} positionY={this.state.positionY}>
          <Text>Tấn Nguyễn </Text>
        </App.Header> */}

        {/* <ScrollView style={{ flex: 1 }} onScroll={this.onScroll} > */}
        <View style={styles.container}>
          <Text style={styles.count}>{count}</Text>
          <View style={styles.content}>
            <Button style={styles.button} text={'-'} onPress={this.onDecrement} />
            <Button style={styles.button} text={'+'} onPress={this.onIncrement} />
          </View>

          <Button onPress={() => navigation.navigate('Login')} text={'go back'} />
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
Home.navigationOptions = navigationOptions;

export default Home;