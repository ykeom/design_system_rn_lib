import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class CheckBox extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>checkbox</Text>
      </View>
    );
  }
}

export default CheckBox;
