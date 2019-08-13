import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Modal extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>modal</Text>
      </View>
    );
  }
}

export default Modal;
