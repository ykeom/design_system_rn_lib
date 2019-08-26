import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../variables';

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.bg100,
    height: '100%',
  },
  dark: {
    opacity: 0.6,
    backgroundColor: colors.primary100,
  },
});

class Container extends Component {
  render() {
    const {
      dark = false,
      fluid = false,
      gridSize = null,
      children,
    } = this.props;

    return (
      <View
        class={(fluid ? 'fluid' : null, gridSize ? `grid--${gridSize}` : null)}
        style={[styles.root, dark ? styles.dark : null]}
      >
        {children}
      </View>
    );
  }
}

export default Container;
