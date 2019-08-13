import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Container extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>container</Text>
      </View>
    );
  }
}

export default Container;
