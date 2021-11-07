import React from 'react'
import { View, Text ,SafeAreaView,Button} from 'react-native'
export default function DetailsScreen({ navigation,route }) {
    const {itemId,name}=route.params;
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId:{itemId} name:{name}</Text>
        <Button title="Go to Details... Again"
          onPress={() => navigation.push('Details')} />
  
        <Button title="Go back"
          onPress={() => navigation.goBack()} />
  
  <Button title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()} />
      </SafeAreaView>
    )
  }