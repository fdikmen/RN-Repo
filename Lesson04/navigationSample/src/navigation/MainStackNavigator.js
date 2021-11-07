import React from 'react'
import { Image, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreatePostScreen from '../screens/CreatePostScreen';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
function HeaderLogo() {
    return (
        <Image style={{ width: 50, height: 50 }}
            source={require('../assets/manzara.jpeg')} />
    );
}
const Stack = createNativeStackNavigator();
export default function MainStackNavigator() {
    return (

        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: 'red' },
                headerTintColor: '#FFF', headerTitleStyle: { fontWeight: 'bold' },
                headerRight: () => (<Button title="Info" color="#FFF" onPress={() => { alert("Info !!!") }} />)
            }}>

            <Stack.Screen name="Home" component={HomeScreen}
                options={{ headerTitle: (props) => <HeaderLogo {...props} /> }} />

            <Stack.Screen name="Details" component={DetailsScreen}
                initialParams={{ bookName: 'First' }} />
            {/* <Stack.Screen name="Details" component={()=><DetailsScreen/>}/> */}
            {/* Pass Props with CallbackFunc
     <Stack.Screen name="Home">
       {props=> <HomeScreen {...props} newData={12}/>}
     </Stack.Screen> */}
            <Stack.Screen name="CreatePost" component={CreatePostScreen}
                options={{
                    title: 'New Message',
                    headerStyle: { backgroundColor: '#2F95D6', borderBottomColor: 'red', borderBottomWidth: 50 },
                    headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' }
                }} />

            <Stack.Screen name="Profile" component={ProfileScreen}
                options={({ route }) => ({ title: route.params.name })} />

        </Stack.Navigator>

    )
}
