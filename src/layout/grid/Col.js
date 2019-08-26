import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Col extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>col</Text>
      </View>
    );
  }
}

export default Col;
