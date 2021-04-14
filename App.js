import React from 'react';
import { KeyboardAvoidingView, Image, StyleSheet, Text, View, TextInput } from 'react-native';
import AddButton from './components/Button';
import MarbleInput from './components/MarbleInput'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jarValue: 0
    }
  }
  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="height">
      <View style={styles.container}>
        <Text style={styles.title}>Marble</Text>
        <Image style={styles.jar} source={require('./assets/jar.gif')}/>
        <Text style={styles.jarValue}>Jar Value: £ {this.state.jarValue}</Text>
        <MarbleInput />
        <AddButton/>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  jarValue: {
    marginTop: 260,
    textAlign: 'center'
  }
});
