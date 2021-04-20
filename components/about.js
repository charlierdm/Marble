import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Image, FlatList } from 'react-native';
import MarbleInput from './MarbleInput'
import Marble from './Marble'
import firebase from '../database/firebase'
import LottieView from 'lottie-react-native';

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/Images/marble.jpeg')}
        />
       <Text style={styles.text}>Must go faster. Checkmate... Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Remind me to thank John for a lovely weekend. Hey, you know how I'm, like, always trying to save the planet? Here's my chance.

Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Life finds a way. Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore!
</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  

  },
  image: {
    width: 400,
    height: 200
  },
  text: {
   fontFamily: 'sans-serif-light',
   fontSize: 16,
   textAlign: 'justify',
   lineHeight: 25,
   
   color: "#465c4f",
   padding: 20
  }
})