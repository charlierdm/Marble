import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Add Marble</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#adebeb',
    width: 100,
  },
})

export default AddButton