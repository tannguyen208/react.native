import React from 'react';
import { View } from 'react-native';

const Header = React.memo(({ positionY, headerStyle, children }) => {
  const styles = {
    container: {
      borderRadius: 0,
      marginTop: -4,
      marginHorizontal: -4,
      elevation: positionY !== 0 ? 4 : 0,
    }
  };

  return (
    <View style={[styles.container, headerStyle]}>
      {children}
    </View>
  );
});

export default Header;