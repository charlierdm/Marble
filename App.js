import React from 'react';
import { FlatList, KeyboardAvoidingView, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import HomeScreen from './components/homeScreen';
import AppLoading from "expo-app-loading";
import { 
  useFonts, Courgette_400Regular 
} from '@expo-google-fonts/courgette';
import { Lato_400Regular } from '@expo-google-fonts/lato';



const Stack = createStackNavigator();

const customFonts = {
  Courgette: require("./assets/fonts/Courgette-Regular.ttf"),
};

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{

        headerTitle: 'Marble',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#FAF5F0',
          height: 110,
        },
        headerTintColor: '#82A993',
        headerTitleStyle: {
          fontSize: 40,
					fontFamily: 'Courgette_400Regular'
        },
        headerTransparent: false,

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
         { title: 'Dashboard' }      
        }
      />
      <Stack.Screen
       name="Profile"
       component={Profile}
       options={
         { title: 'Profile' },
         {headerLeft: null}
       }
      />
    </Stack.Navigator>
  );
}

export default function App() {
	let [fontsLoaded] = useFonts({
    Courgette_400Regular, Lato_400Regular 
  });

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		);
	}
}
