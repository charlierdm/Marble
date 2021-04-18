import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Image, FlatList } from 'react-native';
import MarbleInput from './MarbleInput'
import Marble from './Marble'
import firebase from '../database/firebase'
import LottieView from 'lottie-react-native';

export default class Dashboard extends Component {
	componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
   this.animation.play(0, 100);
  }

	holdAnimation = () => {
		this.animation.play(0, 0);
	}

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
	}
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
            ref={animation => {
              this.animation = animation;
            }}
						
            source={require('../assets/animations/add-marble-gold.json')}
            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
          />
      <Text style={styles.jarValue}>Jar Value: £ {this.state.jarValue}</Text>
      <MarbleInput onSubmit={this.handleAddMarble}/>
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
  resizeMode: 'contain',
  width: 180,
  position: 'absolute', top: -100,
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
