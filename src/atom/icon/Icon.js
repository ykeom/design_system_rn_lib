import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Button extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>icon</Text>
      </View>
    );
  }
}

export default Button;
