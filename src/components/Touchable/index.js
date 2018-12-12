import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

const propTypes = {};
const defaultProps = {};

/**
 * Touchable component
 * @param {any} props 
 * @default activeOpacity={0.8}
 */
const Touchable = props => <TouchableOpacity activeOpacity={0.8} {...props} />

Touchable.propTypes = propTypes;
Touchable.defaultProps = defaultProps;

export default Touchable;