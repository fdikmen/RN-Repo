import React, { Component } from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';

export default class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
     <Text>Main</Text>
      </View>
    );
  }
  }
const styles = StyleSheet.create({
  container: {
      paddingTop: 50,
      fontSize: 18,
      fontWeight: '400',
      backgroundColor: '#FFEBCB',
      flex:1,// ---> 5/5
      flexDirection:'column',  
    }
  });
