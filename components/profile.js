import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Image, FlatList, Alert } from 'react-native';
import firebase from '../database/firebase';
import Marble from './Marble'
import Dashboard from './dashboard'
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";

export default class Profile extends Component {

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  userDelete = () => {
    var user = firebase.auth().currentUser;
    user.delete().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  passReset = () => {
    var useremail = firebase.auth().currentUser.email;
    firebase.auth().sendPasswordResetEmail(useremail).then(function() {
      console.log("Reset Email Sent")
    }).catch(function(error) {
      console.log("Error in sending reset, please try or contact developer")
    });
  }

  passFlash = () => {
    showMessage({
          //dont judge me..
          message: "                      Password Reset Email Sent!",
          type: "default",
          backgroundColor: '#82A993',
          textAlign: 'center'
        });
  }

  passCombine = () => {
    this.passFlash()
    this.passReset()
  }

  twoOptionDeleteHandler = () => {
    Alert.alert(
      'Delete Account',
      'Are you sure?',
      [
        {
          text: 'Yes',
          onPress: () => this.userDelete()
        },
        {
          text: 'No',
          onPress: () => console.log('No Pressed'), style: 'cancel'
        },
      ],
      {cancelable: false},
    );
  };

  constructor(props) {
    super(props);
    this.state = {
      activity: '',
      uid: '',
      name: ''
    }
  }

  render() {
    var user = firebase.auth().currentUser;
    return (<KeyboardAvoidingView
    style={styles.container}
    behavior="height">
    <View style={styles.container}>
      <Image style={styles.profilePic} source={{uri: user.photoURL}}/>

      <View style ={styles.nameanduser}>
      <Text style={styles.text}>{user.displayName}</Text>
      <Text style={styles.text}>{user.email}</Text>
      </View>

        <TouchableOpacity
            style={styles.button}
            onPress={() => this.signOut()}>
            <Text style={styles.buttontext}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => this.passCombine()}>
            <Text style={styles.buttontext}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => this.twoOptionDeleteHandler()}>
            <Text style={styles.buttontext}>Delete Account</Text>
        </TouchableOpacity>

    </View>
    <FlashMessage position="top" />
    </KeyboardAvoidingView>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingTop: 20
},
title: {
  fontSize: 30,
  marginTop: 20,
  marginLeft: 10,
},
text: {
  fontSize: 20,
  color: '#638270',
  fontFamily: 'Lato_400Regular',
  marginTop: 5,
  marginBottom: 5,
},
button: {
  borderRadius: 20,
  backgroundColor: '#82A993',
  width: 300,
  padding: 10,
  marginTop: 20,
  alignItems: 'center',
  color: '#FAF5F0',
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
},
nameanduser: {
  backgroundColor: '#FAF5F0',
  alignItems: 'center',
  width: 300,
  borderRadius: 20,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  elevation: 3,
},
profilePic: {
  width: 110,
  height: 110,
  marginTop: 30,
  marginBottom: 40
},
buttontext: {
  color: '#fff',
  alignSelf: 'center'
}
});
