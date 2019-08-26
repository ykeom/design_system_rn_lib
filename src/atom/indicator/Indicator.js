import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Indicator extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>indicator</Text>
      </View>
    );
  }
}

export default Indicator;
