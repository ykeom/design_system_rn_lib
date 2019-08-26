import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class DatePicker extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>date picker</Text>
      </View>
    );
  }
}

export default DatePicker;
