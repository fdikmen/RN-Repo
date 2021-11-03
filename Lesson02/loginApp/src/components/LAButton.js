import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class LAButton extends Component {
    render() {
        const {color,backgroundColor,text} = this.props;
        return (
            <TouchableOpacity style={[styles.appButtonContainer,{backgroundColor}]}>
            <Text style={[styles.appButtonText,{color}]}>{text}</Text>
          </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})
