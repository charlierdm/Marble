import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Button, KeyboardAvoidingView, Image, FlatList } from 'react-native';
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
        <ScrollView>
        <Image
          style={styles.image}
          source={require('../assets/Images/marble.jpeg')}
        />
       <Text style={styles.text}>
       Marble is an app designed to help you achieve consistency in your invisible habits.{'\n\n'}

<Text style={styles.header}>What is an invisible habit?{'\n\n'}</Text>

Not buying takeaway, not buying new clothing, not travelling by cab and walking instead. They are habits with no immediate reward or visual cue. These habits are harder to maintain as they lack visual feedback, the fruits of not doing these things only becomes clear over a longer time frame.{'\n\n'}
That is where Marble comes in. Track your invisible habits by entering which form of consumption you haven’t indulged in and how much you have saved.{'\n\n'}

<Text style={styles.example}>Example: Sushi - £40{'\n\n'}</Text>

Marble delivers visual and audio feedback to provide a sense of reward to help reinforce the positive steps you wish to take in your life. We at marble hope this helps you in achieving your long-term goals and improving your savings.{'\n\n'}
In reducing your consumerism, you are contributing to a greener society that is not so focused on acquiring the next thing. Instead, you will develop mindfulness of the actions you take, save the planets resources and improve your finances for a brighter future.{'\n\n'}

       </Text>
       </ScrollView>
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
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  },
  example: {
    fontWeight: 'bold',
    fontSize: 16
  }
})