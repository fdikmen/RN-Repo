import React from 'react'
import { Text, SafeAreaView, Button } from 'react-native'

export default function HomeScreen({ navigation, route }) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details"
        onPress={() => navigation.navigate('Details', { itemId: 11, name: 'Tommy' })} />
      <Button title="Write new Message"
        onPress={() => { navigation.navigate('CreatePost') }} />
      <Text style={{ margin: 15 }}>{route.params?.post}</Text>

      <Button title="Go To Profile"
        onPress={() => { navigation.navigate('Profile', { name: 'Custom Title TEST' }) }} />
    </SafeAreaView>
  )
}
