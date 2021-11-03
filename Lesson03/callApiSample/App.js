import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import AxiosSample from './src/components/AxiosSample'
import Persons from './src/components/Persons'


export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Persons/>
        {/* <AxiosSample/> */}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
