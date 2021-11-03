import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Persons from './src/components/Persons'


export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Persons/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})
