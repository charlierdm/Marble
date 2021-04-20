import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, KeyboardAvoidingView, Image, FlatList, ImageBackground } from 'react-native';
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
      tabBarOptions={{
        style: { 
        backgroundColor: '#FAF5F0',
        elevation: 0,
      }, indicatorStyle: {
        width: 0, height: 0, elevation: 0,      
      }, activeTintColor: '#82A993',
          inactiveTintColor: 'gray',
      }}
      
      >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator> 
    )
  }
}





