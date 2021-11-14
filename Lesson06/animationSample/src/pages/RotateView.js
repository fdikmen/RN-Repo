import React from 'react'
import { Animated, Easing, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function RotateView() {
    let rotateValueHolder = new Animated.Value(0);

    const startImageRotateFunc = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: false
            }
        ).start(()=>startImageRotateFunc())
    }
    const rotateData = rotateValueHolder.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','360deg']
    })

    return (
        <View style={{alignItems:'center'}}>
            <Text style={styles.titleText}> Rotate Image Animation</Text>
           {/* <Image style={{width:200,height:200,transform:[{rotate:'160deg'}]}} 
           source={require('../assets/smile.png')}/> */}
           <Animated.Image style={{width:200,height:200,transform:[{rotate:rotateData}]}} 
           source={require('../assets/smile.png')}/>
           <TouchableOpacity onPress={startImageRotateFunc} style={styles.buttonStyle}>
               <Text style={styles.buttonTextStyle}>Start Rotate</Text>
           </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    titleText:{fontSize:20,textAlign:'center',fontWeight:'bold',paddingTop:35,paddingBottom:15},
    buttonStyle:{width:'90%',marginTop:20,backgroundColor:'orange',padding:10,borderRadius:50,height:50},
    buttonTextStyle:{color:'white',fontSize:20,textAlign:'center'}
})


