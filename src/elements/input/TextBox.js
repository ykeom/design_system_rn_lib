import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class TextBox extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>text box</Text>
      </View>
    );
  }
}

export default TextBox;
