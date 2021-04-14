import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AddButton = () => {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Add Marble</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: '#adebeb',
    width: 100,
    padding: 10,
  },
  container: { 
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 10,
  },
  text: {
    textAlign: 'center'
  }
})

export default AddButton