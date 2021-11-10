import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const MyDrawer = createDrawerNavigator();
export default function DrawerNavSample() {
    return (
        <MyDrawer.Navigator initialRouteName="Home">
            <MyDrawer.Screen name="Home" component={HomeScreen}></MyDrawer.Screen>
            <MyDrawer.Screen name="Notifications" component={NotificationsScreen}></MyDrawer.Screen>
        </MyDrawer.Navigator>
    )
}

const styles = StyleSheet.create({})
