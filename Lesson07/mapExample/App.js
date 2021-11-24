import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MarkerSample from './src/components/MarkerSample'
import RegionSample from './src/components/RegionSample'


export default function App() {
  return (
    <View style={styles.container}>
      {/* <RegionSample/> */}
      <MarkerSample/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})
