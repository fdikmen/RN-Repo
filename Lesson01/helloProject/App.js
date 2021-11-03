import React, { Component } from 'react';
import { View, Text,StyleSheet, Button, SafeAreaView } from 'react-native';
import StatesComp from './src/components/statesComp'
import ImageComp from './src/components/imageComp'
import TouchSample from './src/components/touchSample';
import TextInputSample from './src/components/textInputSample';
import ScrollView from './src/components/scrollView';
import DimensionsSample from './src/components/dimensionsSample';
import FlatListComp from './src/components/FlatListComp';
import PlatformSample from './src/components/PlatformSample';
export default class App extends Component {
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Main</Text>
        {/* <StatesComp/> */}
        {/* <ImageComp/> */}
        {/* <TouchSample /> */}
        {/* <TextInputSample/> */}
        {/* <ScrollView/> */}
        {/* <DimensionsSample/> */}
        {/* <FlatListComp/> */}
        <PlatformSample/>
      </SafeAreaView>
    );
  }
  }
const styles = StyleSheet.create({
  container: {
      // paddingTop: 50,
      fontSize: 18,
      fontWeight: '400',
      backgroundColor: '#FFEBCB',
      flex:1,// ---> 5/5
      flexDirection:'column',  
    }
  });
