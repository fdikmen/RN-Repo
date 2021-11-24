import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello map!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1 },
  map: {flex: 1}
});
