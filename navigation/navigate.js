import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import Scorescreen from '../components/score';

export default function Main() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='home' component={Scorescreen} />
        <Stack.Screen name='play' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
