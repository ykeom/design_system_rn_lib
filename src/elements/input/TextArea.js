import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class TextArea extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>text area</Text>
      </View>
    );
  }
}

export default TextArea;
