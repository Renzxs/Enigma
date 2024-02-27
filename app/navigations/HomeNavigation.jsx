import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import SingleProductPage from '../screens/SingleProductPage';
import TabNavigation from '../navigations/TabNavigation';

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
        <Stack.Screen name='home' component={TabNavigation} />
        <Stack.Screen name='SingleProduct' component={SingleProductPage} />
    </Stack.Navigator>
  )
}