import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FadeInView from './src/pages/FadeInView'

export default function App() {

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <FadeInView style={styles.fadeContainer}>  
          <Text style={styles.fadeContainerText}>FADING IN</Text>      
        </FadeInView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,alignItems:'center',justifyContent:'center',marginTop:40},
  fadeContainer:{width:250,height:60,backgroundColor:'#bc477b'},
  fadeContainerText:{fontSize:30,textAlign:'center',margin:10,color:'white'}
})
