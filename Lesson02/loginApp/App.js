import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native'
import Login from './src/pages/Login'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Login/>
      </View>
    )
  }
}
const styles = StyleSheet.create({  
  container:{
      flex:1,
      backgroundColor:'#F5FCFF',
    }
  })
