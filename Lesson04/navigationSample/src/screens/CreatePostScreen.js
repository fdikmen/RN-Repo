import React from 'react'
import { SafeAreaView, Button, TextInput } from 'react-native'
export default function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');
  return (
    <SafeAreaView >
      <TextInput multiline
        placeholder="Write message..."
        style={{ height: 300, padding: 15, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button title="Send Message"
        onPress={() => {
          navigation.navigate({ name: 'Home', params: { post: postText } })
        }}
      />
    </SafeAreaView>
  )
}