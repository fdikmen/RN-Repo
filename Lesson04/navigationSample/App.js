import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';


function HomeScreen({ navigation,route }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details"
        onPress={() => navigation.navigate('Details',{itemId:11,name:'Tommy'})} />
    <Button title="Write new Message"
    onPress={()=>{navigation.navigate('CreatePost')}}/>    
    <Text style={{margin:15}}>{route.params?.post}</Text>

    <Button title="Go To Profile"
    onPress={()=>{navigation.navigate('Profile',{name:'Custom Title TEST'})}}/>
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
function ProfileScreen({navigation}) {
  return (
    /*<Button
    title='Swap title and name'
    onPress={
      ()=> setParams({
        friends:route.params.name === 'Tommy' ? "OK" : "NOT",
        title:route.params.title === 'Tommy' ? "Tommy Profile" : "Other Profile" 
      })
    }
    />*/
    <View>
      <Text>Profile Screen</Text>
      <Button title="Go Back" onPress={()=>{navigation.goBack()}}/>
    </View>
  )
}
function CreatePostScreen({navigation,route}) {
  const [postText,setPostText] = React.useState('');
  return (
    <View >
      <TextInput multiline
      placeholder="Write message..."
      style={{height:300,padding: 15,backgroundColor:'white'}}
      value={postText}
      onChangeText={setPostText}
      />
      <Button title="Send Message"
      onPress={()=>{
        navigation.navigate({name:'Home',params:{post:postText}})
      }}
      />
    </View>
  )
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: 'red' } }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Title' }} />
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{bookName:'First'}}/>
        {/* <Stack.Screen name="Details" component={()=><DetailsScreen/>}/> */}
        {/* Pass Props with CallbackFunc
     <Stack.Screen name="Home">
       {props=> <HomeScreen {...props} newData={12}/>}
     </Stack.Screen> */}
     <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{title:'New Message'}}/>
     <Stack.Screen name="Profile" component={ProfileScreen}
     options={({route})=>({title:route.params.name})}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})