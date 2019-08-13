import React, { Component } from 'react';
import { View, StyleSheet, Text as RNText } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Text extends Component {
  render() {
    return (
      <View style={styles.root}>
        <RNText>button</RNText>
      </View>
    );
  }
}

export default Text;
