import React from 'react';
import { FlatList, KeyboardAvoidingView, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MarbleInput from './components/MarbleInput'
import Marble from './components/Marble'
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import HomeScreen from './components/homeScreen'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ title: 'Signup' }}
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
         { title: 'Dashboard' },
         {headerLeft: null}
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
