import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Geolocation from '@react-native-community/geolocation';
export default function GetCurrentLocation() {
    Geolocation.getCurrentPosition(
        (info)=>console.log(info),
        (error)=>console.log(error),
        {
            enableHighAccuracy:false
        }
    )
    return (
        <View>
            <Text>Geolocation getCurrentPosition</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
