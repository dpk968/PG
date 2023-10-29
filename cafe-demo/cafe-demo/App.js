import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CafeListScreen from './components/CafeListScreen';
import CafeDetailScreen from './components/CafeDetailScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CafeListScreen} />
        <Stack.Screen name="Details" component={CafeDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App