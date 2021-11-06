import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import {createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen() {
  return (
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  )
}


function DetailsScreen() {
  return (
    <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Details Screen</Text>
    </SafeAreaView>
  )
}

const Stack=createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle:{backgroundColor:'red',color:'white'}}}>
       <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home Title'}}/>
       <Stack.Screen name="Details" component={DetailsScreen}/>
       {/* <Stack.Screen name="Details" component={()=><DetailsScreen/>}/> */}
     </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
