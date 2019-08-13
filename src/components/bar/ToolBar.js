import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class ToolBar extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>tool bar</Text>
      </View>
    );
  }
}

export default ToolBar;
