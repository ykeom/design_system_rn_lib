import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Toast extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>toast</Text>
      </View>
    );
  }
}

export default Toast;
