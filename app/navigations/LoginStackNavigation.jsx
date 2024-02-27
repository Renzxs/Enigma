import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from '../screens/HomeScreen';
import SingleProductPage from '../screens/SingleProductPage';

const Stack = createNativeStackNavigator();

export default function LoginStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}