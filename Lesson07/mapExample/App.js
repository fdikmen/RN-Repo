import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GetCurrentLocation from './src/components/GetCurrentLocation'
import MarkerSample from './src/components/MarkerSample'
import RegionSample from './src/components/RegionSample'


export default function App() {
  return (
    <View style={styles.container}>
      {/* <RegionSample/> */}
      {/* <MarkerSample/> */}
      <GetCurrentLocation/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})
