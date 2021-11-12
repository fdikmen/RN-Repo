import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import ImagePickerSample from './src/pages/ImagePickerSample'


export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={{fontWeight:'bold',fontSize:25,margin:10,textAlign:'center'}}> Image Picker Lib. SAMPLE </Text>
        <ImagePickerSample></ImagePickerSample>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
