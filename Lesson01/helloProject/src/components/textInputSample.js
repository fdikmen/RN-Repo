import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class textInputSample extends Component {
    state={username:''}
    render() {
        return (
            <View>
                <Text> textInputSample </Text>
                <Text style={styles.userText}>{this.state.username}</Text>
                <TextInput
                //secureTextEntry={true}
                keyboardAppearance='dark'
                //keyboardType='email-address'
                // editable={false}
                autoCapitalize='words'
                style={{height:50,borderColor:'gray',borderWidth:2}}
                placeholder='Username'
                value={this.state.username}
                onChangeText={(userText)=>this.setState({username:userText})}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    userText:{fontSize:25,fontWeight:'bold',
paddingHorizontal:50,paddingVertical:40}
})
