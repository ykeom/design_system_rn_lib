import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Image extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>image</Text>
      </View>
    );
  }
}

export default Image;
