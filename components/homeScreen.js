import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Image, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MarbleInput from './MarbleInput'
import Marble from './Marble'
import firebase from '../database/firebase'
import LottieView from 'lottie-react-native';

import Dashboard from './dashboard';
import About from './about';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const Tab = createMaterialTopTabNavigator();  
    return(
      <Tab.Navigator 
      // tabBarOptions={{showLabel: false}}
      >
      <Tab.Screen name="Marbles" component={Dashboard} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator> 
    )
  }
}



