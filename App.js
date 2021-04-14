import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AddButton from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marble</Text>
      <Image style={styles.jar} source={require('./assets/jar.gif')}/>
      <AddButton/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#e6fffa',
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 10,
  },
  jar: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 180,
    position: 'absolute', top: -100,
  }
});
