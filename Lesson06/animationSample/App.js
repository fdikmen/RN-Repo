import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import AnimatedParallelSample from './src/pages/AnimatedParallelSample'
import AnimatedSequenceSample from './src/pages/AnimatedSequenceSample'
import AnimatedSpringView from './src/pages/AnimatedSpringView'
import DecayPanResponderView from './src/pages/DecayPanResponderView'
import EasingView from './src/pages/EasingView'
import FadeInView from './src/pages/FadeInView'
import Interpolate from './src/pages/Interpolate'
import LayoutAnimationSample01 from './src/pages/LayoutAnimationSample01'
import LayoutAnimationSample02 from './src/pages/LayoutAnimationSample02'
import LayoutAnimationSample03 from './src/pages/LayoutAnimationSample03'
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
      {/* <AnimatedParallelSample/> */}
      {/* <AnimatedSequenceSample/> */}
      {/* <LayoutAnimationSample01/> */}
      {/* <LayoutAnimationSample02/> */}
      {/* <LayoutAnimationSample03/> */}
      <DecayPanResponderView/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,alignItems:'center',justifyContent:'center',marginTop:140},
  fadeContainer:{width:250,height:60,backgroundColor:'#bc477b'},
  fadeContainerText:{fontSize:30,textAlign:'center',margin:10,color:'white'}
})
