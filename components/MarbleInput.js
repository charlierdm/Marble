import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const MarbleInput = () => {
  return (
    <View style={styles.container}>
    <TextInput
      style={styles.textInput}
      placeholder="How did you reduce consumerism?"
    />
    <TextInput
      style={styles.valueInput}
      placeholder="How much would it have cost?"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    
  },
  textInput: {
    height: 40,
    marginTop:15,
    backgroundColor: '#fff',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  valueInput: {
    height: 40,
    marginTop: 10,
    backgroundColor: '#fff',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  }
})

export default MarbleInput