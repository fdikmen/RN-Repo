import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import {useDrawerStatus} from '@react-navigation/drawer'

export default function NotificationsScreen({navigation}) {
    const isDrawenOpen = useDrawerStatus() === 'open';
    return (
        <View>
            <Text>NotificationsScreen</Text>
            <Text>Drawer: {isDrawenOpen}</Text>
            <Button title="Open Drawer" onPress={()=>navigation.openDrawer()}/>
            <Button title="Toggle Drawer" onPress={()=>navigation.toggleDrawer()}/>
        </View>
    )
}

const styles = StyleSheet.create({})
