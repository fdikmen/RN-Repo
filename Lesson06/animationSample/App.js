import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import AnimatedParallelSample from './src/pages/AnimatedParallelSample'
import AnimatedSpringView from './src/pages/AnimatedSpringView'
import EasingView from './src/pages/EasingView'
import FadeInView from './src/pages/FadeInView'
import Interpolate from './src/pages/Interpolate'
import RotateView from './src/pages/RotateView'

export default function App() {

  return (
    <SafeAreaView>
      {/* <View style={styles.container}>
      <FadeInView style={styles.fadeContainer}>  
          <Text style={styles.fadeContainerText}>FADING IN</Text>      
        </FadeInView>
      </View>
      <RotateView/> */}
      {/* <EasingView/> */}
      {/* <Interpolate/> */}
      {/* <AnimatedSpringView/> */}
      <AnimatedParallelSample/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,alignItems:'center',justifyContent:'center',marginTop:140},
  fadeContainer:{width:250,height:60,backgroundColor:'#bc477b'},
  fadeContainerText:{fontSize:30,textAlign:'center',margin:10,color:'white'}
})
