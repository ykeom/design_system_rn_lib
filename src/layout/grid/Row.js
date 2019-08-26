import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Row extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>layout</Text>
      </View>
    );
  }
}

export default Row;
