import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Label extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>label</Text>
      </View>
    );
  }
}

export default Label;
