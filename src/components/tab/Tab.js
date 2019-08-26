import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Tab extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>tab</Text>
      </View>
    );
  }
}

export default Tab;
