//by RNCS snippet
import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

export default class imageComp extends Component {
    render() {
        return (
            <View>
                <Text> imageComp </Text>
 <Image source={require('../assets/manzara.jpeg')}/>
<Image 
resizeMode={'contain'}
style={{width:'100%',height:180}} 
source={{uri:'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg'}}/>

<Image 
resizeMode={'cover'}
style={{width:'100%',height:380}} 
source={{uri:'https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669__480.jpg'}}/>
            </View>
        //Resizemode : contain, cover, center, repeat, stretch
        )
    }
}

const styles = StyleSheet.create({})
