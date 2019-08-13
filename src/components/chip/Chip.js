import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Chip extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>chip</Text>
      </View>
    );
  }
}

export default Chip;
