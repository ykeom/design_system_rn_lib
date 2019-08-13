import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Divider extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>divider</Text>
      </View>
    );
  }
}

export default Divider;
