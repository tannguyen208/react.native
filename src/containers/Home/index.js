import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';
import { Button } from '../../components';

const propTypes = {};
const defaultProps = {};
const navigationOptions = {};

class Home extends React.Component {
  render = () => {
    return (
      <View style={styles.container}>
        <Button />
      </View>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
Home.navigationOptions = navigationOptions;

export default Home;