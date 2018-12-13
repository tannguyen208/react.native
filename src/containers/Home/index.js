import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import styles from './styles';
import { Button } from '../../components';

const propTypes = {};
const defaultProps = {};
const navigationOptions = {
  title: 'Home',
};

@connect((state) => ({ count: state.count }))
class Home extends React.Component {
  onDecrement = () => {
    let { dispatch } = this.props;
    dispatch({ type: 'count/decrement', payload: 2 });
  }

  onIncrement = () => {
    let { dispatch } = this.props;
    dispatch({ type: 'count/increment' });
  }

  render = () => {
    let { count } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.content}>
          <Button style={styles.button} text={'-'} onPress={this.onDecrement} />
          <Button style={styles.button} text={'+'} onPress={this.onIncrement} />
        </View>
      </View>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
Home.navigationOptions = navigationOptions;

export default Home;