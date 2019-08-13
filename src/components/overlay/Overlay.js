import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Overlay extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>overlay</Text>
      </View>
    );
  }
}

export default Overlay;
