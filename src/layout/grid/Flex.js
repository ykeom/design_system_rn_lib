import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Flex extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>flex</Text>
      </View>
    );
  }
}

export default Flex;
