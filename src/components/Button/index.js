import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import Touchable from '../Touchable';
import styles from './styles';

const propTypes = {};
const defaultProps = {};

/**
 * Button component
 * @param {any} props 
 */
export const Button = ({ text, children, style, textStyle, ...rest }) => (
  <Touchable style={[styles.button, style]} {...rest}>
    <Text style={[styles.text, textStyle]}>{text || children}</Text>
  </Touchable>
)

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;