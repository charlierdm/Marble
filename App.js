import React from 'react';
import { FlatList, KeyboardAvoidingView, Image, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MarbleInput from './components/MarbleInput';
import Marble from './components/Marble';
import Login from './components/login';
import Signup from './components/signup';
// import Dashboard from './components/dashboard'
import Profile from './components/profile';
import HomeScreen from './components/homeScreen';
import firebase from './database/firebase';

const Stack = createStackNavigator();

function MyStack() {

  var loggedIn;
  firebase.auth().onAuthStateChanged(user => {
  if (user) {
      loggedIn = true
    } else {
      loggedIn = false
    }
  })

  return (

    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitle: 'Marble',
        headerRight: () => (
          loggedIn ?
            <Button
                onPress={() => navigation.navigate('Profile')}
              title="Info"
              color="#fff"
            /> : null),
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#FAF5F0',
          height: 110,
        },
        headerTintColor: '#82A993',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTransparent: false,

      }}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Signup'}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={
          {title: 'Login'},
        {headerLeft: null}
        }
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={
          {title: 'Dashboard'}
        }
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={
          {title: 'Profile'},
        {headerLeft: null}
        }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
