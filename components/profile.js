import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Image, FlatList } from 'react-native';
import firebase from '../database/firebase';

export default class Profile extends Component {

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  userDelete = () => {
    firebase.auth().delete().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
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
      <Image style={styles.profilePic} source={user.photoURL}/>
      <Text style={styles.text}>{user.displayName}</Text>
      <Text style={styles.text}>{user.email}</Text>

      <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />

        <Button
            color="#3740FE"
            title="Delete Account"
            onPress={() => this.userDelete()}
          />

    </View>
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
