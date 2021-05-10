import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,createSwitchNavigator } from '@react-navigation/stack';
import App from '../../../App';
import { NumberScreen,HomeScreen,AbcScreen,AbcLat,ColorScreen,MusicScreen,SoalScreen,HasilScreen,ColorLat,VideoPlayer,NumberLat,VideoScreen } from '../../containers/pages';
import { AppRegistry } from 'react-native';

function Router() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
        headerShown: false,
        animationEnabled: false}}>
        <Stack.Screen name="Home" component={HomeScreen} headermode= 'none' />
        <Stack.Screen name="VideoScreen" component={VideoScreen} headermode= 'none' />
        <Stack.Screen name="SoalScreen" component={SoalScreen} headermode= 'none' />
        <Stack.Screen name="HasilScreen" component={HasilScreen} headermode= 'none' />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} headermode= 'none' />
        <Stack.Screen name="MusicScreen" component={MusicScreen} headermode= 'none' />
        <Stack.Screen name="NumberLat" component={NumberLat} headermode= 'none' />
        <Stack.Screen name="NumberScreen" component={NumberScreen} headermode= 'none' />
        <Stack.Screen name="ColorLat" component={ColorLat} headermode= 'none' />
        <Stack.Screen name="ColorScreen" component={ColorScreen} headermode= 'none' />
        <Stack.Screen name="AbcLat" component={AbcLat} headermode= 'none' />
        <Stack.Screen name="AbcScreen" component={AbcScreen} headermode= 'none' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 

export default Router;
