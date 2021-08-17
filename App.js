import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import HotelInfoScreen from './screens/HotelInfoScreen';

const Stack= createStackNavigator()

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator
        initialRouteName="Homepage"
     >
       <Stack.Screen name="Homepage" component={HomeScreen} options={{
         headerShown: false,
       }}/>
       <Stack.Screen name="HotelInfo" component={HotelInfoScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

