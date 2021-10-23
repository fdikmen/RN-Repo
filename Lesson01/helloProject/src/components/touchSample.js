import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TouchableHighlight, Image } from 'react-native'

export default class touchSample extends Component {
    render() {
        return (
            <View>
                <Text> touchSample </Text>
                <TouchableOpacity onPress={() => { alert("TouchableOpacity") }}>
                    <View>
                        <Text>TouchableOpacity BUTTON</Text>
                    </View>
                </TouchableOpacity>
                <TouchableHighlight onPress={() => { alert("TouchableHighlight") }}>
                    <Image
                        resizeMode={'cover'}
                        style={{ width: '100%', height: 50 }}
                        source={{ uri: 'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg' }} />
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
