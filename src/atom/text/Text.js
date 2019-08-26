import React, { Component } from 'react';
import { View, StyleSheet, Text as RNText } from 'react-native';
import { colors, fonts } from '../../variables';

const ALIGN_STYLE = {
  left: 'left',
  right: 'right',
  center: 'center',
};

const types = {
  display1: {
    fontSize: 40,
    fontWeight: `${fonts.weight.thin}`,
    lineHeight: 64,
    letterSpacing: 0,
  },
  display2: {
    fontSize: 32,
    fontWeight: `${fonts.weight.thin}`,
    lineHeight: 50,
    letterSpacing: 0,
  },
  display3: {
    fontSize: 20,
    fontWeight: `${fonts.weight.thin}`,
    lineHeight: 32,
    letterSpacing: 0,
  },
  heading1: {
    fontSize: 32,
    fontWeight: `${fonts.weight.bold}`,
    lineHeight: 50,
    letterSpacing: 0,
  },
  heading2: {
    fontSize: 24,
    fontWeight: `${fonts.weight.bold}`,
    lineHeight: 38,
    letterSpacing: 0,
  },
  heading3: {
    fontSize: 18,
    fontWeight: `${fonts.weight.bold}`,
    lineHeight: 28,
    letterSpacing: 0,
  },
  subheading: {
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0,
  },
  label: {
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 0,
  },
  body: {
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: -0.5,
  },
  message: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0,
  },
  caption: {
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0,
  },
};

class Text extends Component {
  render() {
    const {
      color = colors.primary100,
      fontSet = fonts.default.regular,
      type = 'body',
      weight = `${fonts.weight.medium}`,
      align = 'left',
      children,
      style,
    } = this.props;

    const styles = StyleSheet.create({
      root: {
        ...style,
      },
      text: {
        ...types[type],
        ...fontSet,
        color,
        fontWeight: weight,
      },
    });

    return (
      <View style={styles.root}>
        <RNText
          style={StyleSheet.flatten([
            { textAlign: ALIGN_STYLE[align] },
            styles.text,
          ])}
        >
          {children}
        </RNText>
      </View>
    );
  }
}

export default Text;
