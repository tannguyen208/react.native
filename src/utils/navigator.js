import React from 'react'

export default (ComposedComponent) => {
  const component = class extends React.Component {
    constructor(props) {
      super(props);
      props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = (event) => {
      switch (event.id) {
        case 'didAppear':
          if (ComposedComponent.screenName) {
            this.props.dispatch(onScreenAppear(ComposedComponent.screenName));
          }
          break;
      }
    };

    render = () => {
      return <ComposedComponent  {...this.props} />;
    }
  }

  return connect()(component);
}