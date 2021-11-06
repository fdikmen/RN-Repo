import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details"
        onPress={() => navigation.navigate('Details',{itemId:11,name:'Tommy'})} />
    </SafeAreaView>
  )
}
function DetailsScreen({ navigation,route }) {
  const {itemId,name}=route.params;
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId:{itemId} name:{name}</Text>
      <Button title="Go to Details... Again"
        onPress={() => navigation.push('Details')} />

      <Button title="Go back"
        onPress={() => navigation.goBack()} />

<Button title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()} />
    </SafeAreaView>
  )
}

function ProfileScreen({navigation:{setParams,setOptions},route}) {
  return (
    <Button
    title='Swap title and name'
    onPress={
      ()=> setParams({
        friends:route.params.name === 'Tommy' ? "OK" : "NOT",
        title:route.params.title === 'Tommy' ? "Tommy Profile" : "Other Profile" 
      })
    }
    />
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: 'red', color: 'white' } }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Title' }} />
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{bookName:'First'}}/>
        {/* <Stack.Screen name="Details" component={()=><DetailsScreen/>}/> */}
        {/* Pass Props with CallbackFunc
     <Stack.Screen name="Home">
       {props=> <HomeScreen {...props} newData={12}/>}
     </Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})