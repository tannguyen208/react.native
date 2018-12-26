import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { default as Styles } from './MultiBarNavigator.Stylesheet';

const ANIMATION_DURATION = 300;

class MultiBarNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      measured: false,
      active: false
    };
  }

  activation = new Animated.Value(0);

  componentDidMount = () => {
    this.makeActivations(this.props.routes);
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.routes !== this.props.routes) {
      this.makeActivations(nextProps.routes);
    }
  }

  actionPressed = route => {
    this.togglePressed();

    alert(route);
  };

  togglePressed = () => {
    const { routes } = this.props;

    if (this.state.active) {
      this.setState({ active: false });
      Animated.parallel([
        Animated.timing(this.activation, { toValue: 0, duration: ANIMATION_DURATION }),
        Animated.stagger(100, routes.map((v, i) => Animated.timing(this[`actionActivation_${(routes.length - 1) - i}`], { toValue: 0, duration: ANIMATION_DURATION })))
      ]).start();
    } else {
      this.setState({ active: true });
      Animated.parallel([
        Animated.timing(this.activation, { toValue: 1, duration: ANIMATION_DURATION }),
        Animated.stagger(100, routes.map((v, i) => Animated.timing(this[`actionActivation_${i}`], { toValue: 1, duration: ANIMATION_DURATION })))
      ]).start();
    }
  };

  renderActions = () => {
    const { routes } = this.props;

    const ACTION_SIZE = 36;
    const EXPANDING_ANGLE = 135;
    const STEP = EXPANDING_ANGLE / routes.length;

    return routes.map((route, i) => {
      const offset = (STEP * (i + 1)) / EXPANDING_ANGLE - 0.5;
      const angle = -90 + (EXPANDING_ANGLE * offset) - (STEP / 2);
      const radius = 80;

      const x = radius * Math.cos(-angle * Math.PI / 180);
      const y = radius * Math.sin(-angle * Math.PI / 180);

      const activationScale = this[`actionActivation_${i}`].interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1]
      });

      const activationPositionX = this[`actionActivation_${i}`].interpolate({
        inputRange: [0, 1],
        outputRange: [0, x]
      });

      const activationPositionY = this[`actionActivation_${i}`].interpolate({
        inputRange: [0, 1],
        outputRange: [0, y]
      });

      return (
        <Animated.View
          key={`action_${i}`}
          style={[Styles.actionContainer, {
            marginLeft: -ACTION_SIZE / 2,
            left: activationPositionX,
            bottom: activationPositionY,
            transform: [
              { scale: activationScale }
            ]
          }]}
        >
          <TouchableOpacity
            style={[Styles.actionContent, {
              backgroundColor: route.color,
            }]}
            onPress={() => this.actionPressed(route)}
          >
            <Icon name={route.iconName} size={18} color={'#ffffff'} />
          </TouchableOpacity>
        </Animated.View>
      );
    })
  };

  /**
     * Create animation values for each action.
     */
  makeActivations = routes => {
    routes.forEach((v, i) => this[`actionActivation_${i}`] = new Animated.Value(0));
    this.setState({ measured: true });
  };

  render = () => {
    const activationRotate = this.activation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '135deg']
    });

    const activationScale = this.activation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.25, 1]
    });

    return (
      <View pointerEvents={'box-none'} style={Styles.container}>
        {
          this.state.measured &&
          <View style={Styles.actionsWrapper}>
            {this.renderActions()}
          </View>
        }
        <TouchableNativeFeedback onPress={this.togglePressed} >
          <Animated.View style={[Styles.toggleButton, {
            transform: [
              { rotate: activationRotate },
              { scale: activationScale }
            ]
          }]}>
            <Icon name={'plus'} style={Styles.toggleIcon} />
          </Animated.View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

MultiBarNavigator.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    color: PropTypes.string,
    iconName: PropTypes.string,
  }))
};

MultiBarNavigator.defaultProps = {
  routes: [
    {
      key: 'youtube',
      color: '#f00',
      iconName: 'youtube',
    },
    {
      key: 'facebook',
      color: '#4267b2',
      iconName: 'facebook-f',
    },
    {
      key: 'instagram',
      color: '#f1a457',
      iconName: 'instagram',
    },
  ],
};

MultiBarNavigator.navigationOptions = {};

export default MultiBarNavigator;
