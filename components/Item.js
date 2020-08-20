import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Item = ({name}) => (
  <View styles={styles.item}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'black',
    padding: 10,
    margin: 10,
  },
  name: {
    color: '#fff',
  },
});

export default Item;
