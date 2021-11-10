import React from 'react'
import { View, Text, Button } from 'react-native'
export default function ProfileScreen({ navigation }) {
  const [count, setCount] = React.useState(0)
  React.useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight:()=>{
          <Button onPress={()=>setCount((c)=>c+1)} title="Update"/>
        }
      }
    )
  }, [navigation,count])
  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Go Back" onPress={() => { navigation.goBack() }} />
      <Button title="Update title"
        onPress={() => { navigation.setOptions({ title: 'New Title!!!' }) }} />
      {/* <Button
      title='Swap title and name'
      onPress={
        ()=> setParams({
          friends:route.params.name === 'Tommy' ? "OK" : "NOT",
          title:route.params.title === 'Tommy' ? "Tommy Profile" : "Other Profile" 
        })
      }
      /> */}
    </View>
  )
}