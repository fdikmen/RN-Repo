import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions} from 'react-native'

const {width} = Dimensions.get('window')
export default class dimensionsSample extends Component {
    render() {
        return (
            <View>
                <Text> Window width: {width} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
