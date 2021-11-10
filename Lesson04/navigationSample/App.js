import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from './src/navigation/MainStackNavigator';
import TabNavSample from './src/components/TabNavSample';
import DrawerNavSample from './src/components/DrawerNavSample';


export default function App() {
  return (
    <NavigationContainer>
      {/* <MainStackNavigator /> */}
      {/* <TabNavSample/> */}
      <DrawerNavSample/>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({})