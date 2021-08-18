import React from 'react';
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
       <Stack.Screen name="HotelInfo" component={HotelInfoScreen} options={{
         headerTransparent:true,
         headerTintColor:"#fff",
         title:""
       }}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

