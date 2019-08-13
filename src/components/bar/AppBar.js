import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class AppBar extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>app bar</Text>
      </View>
    );
  }
}

export default AppBar;
