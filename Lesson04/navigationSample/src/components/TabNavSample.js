import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Icon from 'react-native-ionicons'



const MyTab=createBottomTabNavigator();
export default function TabNavSample() {
    return (
        <MyTab.Navigator        
        screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;
                if (route.name==='Home') {
                    iconName = focused ? 'apps' : 'home'
                }
                else if(route.name==='Settings'){
                    iconName = focused ? 'apps':'settings'
                }
                return <Icon name={iconName} color={color} size={size}/>;
            },
            tabBarActiveTintColor:'tomato',
            tabBarInactiveTintColor:'gray'
        })}>
            <MyTab.Screen name="Home" component={HomeScreen}/>
            <MyTab.Screen name="Settings" component={SettingsScreen}
            options={{tabBarBadge:5}}/>
        </MyTab.Navigator>
    )
}

const styles = StyleSheet.create({})
