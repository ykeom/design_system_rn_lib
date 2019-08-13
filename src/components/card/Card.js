import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {},
});

class Card extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>card</Text>
      </View>
    );
  }
}

export default Card;
