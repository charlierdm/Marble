import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Image, FlatList } from 'react-native';
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
          message: "Password Reset Email Sent!",
          type: "success",
        });
  }

  passCombine = () => {
    this.passFlash()
    this.passReset()
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
      <Text style={styles.text}>{user.displayName}</Text>
      <Text style={styles.text}>{user.email}</Text>

      <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />

        <Button
            color="#3740FE"
            title="Reset Password"
            onPress={() => this.passCombine()}
          />

        <Button
            color="#3740FE"
            title="Delete Account"
            onPress={() => this.userDelete()}
          />

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
  backgroundColor: '#e6fffa',
},
title: {
  fontSize: 30,
  marginTop: 20,
  marginLeft: 10,
},
text: {
  fontSize: 20,
},
profilePic: {
  width: 80,
  height: 110,
  marginTop: 30
}
});
