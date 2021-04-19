import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Image, FlatList } from 'react-native';
import MarbleInput from './MarbleInput'
import Marble from './Marble'
import firebase from '../database/firebase'
import LottieView from 'lottie-react-native';

export default class Dashboard extends Component {
  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

constructor(props) {
  super(props);
  this.state = {
    jarValue: 0,
    activity: '',
    marbles: [],
    uid: ''
  }
}
getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  //return date in the desired format
  return date + '/' + month + '/' + year;
}
handleAddMarble = (activity, cost) => {
  const costInt = parseInt(cost);
  const date = this.getCurrentDate();
  this.setState({jarValue: this.state.jarValue + costInt})
  this.setState({activity: activity});
  this.setState({ marbles: [...this.state.marbles, {date: date, activity: activity, cost: costInt}] })
	// below line plays animation when marble added
	this.add_marble_animation.play(20, 63)
  // save latest marble in the marbles array
}

render() {
  const { marbles } = this.state;
  let recentHeading = ""
  marbles.length > 0 ? recentHeading = "Recent Marbles" : recentHeading = "" //render heading depends on marbles count
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="height">
    <View style={styles.container}>
			
      <Text style={styles.title}>Marble</Text>
			<LottieView
            autoPlay={false}
						loop={false}
						ref={animation => {
              this.add_marble_animation = animation;
            }}
						style={styles.jar}
            source={require('../assets/animations/add-marble-gold.json')}
          />
      <Text style={styles.jarValue}>Jar Value: £ {this.state.jarValue}</Text>
			
      <MarbleInput onSubmit={this.handleAddMarble} />
      <Text style={styles.recentMarblesHeading}>{recentHeading}</Text>

      <FlatList
      data={marbles}
      renderItem={({item}) => <Marble date = {item.date} activity={item.activity} cost={item.cost} />}
      keyExtractor={(item, index) => {
        return  index.toString();
       }}
      />

      <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />

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
  width: 280,
  position: 'absolute', top: 0,
},
jarValue: {
  marginTop: 260,
  textAlign: 'center'
},
recentMarblesHeading: {
  fontSize: 20,
  marginLeft: 10,
  marginTop: 10,
}
});
