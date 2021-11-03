import React, { Component } from 'react'
import { Text, StyleSheet, View,Platform } from 'react-native'
import PlatformHeader from './PlatformHeader'
export default class PlatformSample extends Component {
    render() {
        const _headerStyle = Platform.select({
            ios:styles.IOSHeader,
            android:styles.AndroidHeader
        })
        return (
            <View>
                <Text> PlatformSample </Text>
                <Text style={_headerStyle}>Header</Text>
                <PlatformHeader/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
IOSHeader:{
    backgroundColor:'red',
    padding: 20,
},
AndroidHeader:{
    backgroundColor:'blue',
    padding: 30,
}
})
