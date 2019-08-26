import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class TimePicker extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>time picker</Text>
      </View>
    );
  }
}

export default TimePicker;
