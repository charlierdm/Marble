import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, KeyboardAvoidingView, Image, FlatList } from 'react-native';
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
    // this.passReset()
  }

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
            <Text>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button}
            onPress={() => this.passCombine()}>
            <Text>Reset Password</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            style={styles.button}
            onPress={() => this.userDelete()}>
            <Text>Delete Account</Text>
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
},
title: {
  fontSize: 30,
  marginTop: 20,
  marginLeft: 10,
},
text: {
  fontSize: 20,
  color: '#465c4f',
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 10
},
button: {
  backgroundColor: '#FAF5F0',
  width: 150,
  padding: 10,
  marginTop: 20,
  alignItems: 'center',
  color: '#465c4f'
},
nameanduser: {
  backgroundColor: '#FAF5F0',
  alignItems: 'center',
  width: 300,
  borderRadius: 20
},
profilePic: {
  width: 110,
  height: 110,
  marginTop: 30,
  marginBottom: 40
}
});
