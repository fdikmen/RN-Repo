import React, { useEffect } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

export default function AnimatedMarker() {
    let animationValue = new Animated.Value(1)

    const startAnimation=()=>{
        Animated.loop(
            Animated.sequence([
                Animated.timing(animationValue,{
                    toValue:0.5,duration:1000,useNativeDriver:false
                }),
                Animated.timing(animationValue,{
                    toValue:1,duration:1000,useNativeDriver:false
                })
            ])
        ).start();
    }
const animatedStyle = {
    opacity:animationValue,
    transform:[{scale:animationValue}]
}
useEffect(() => {
   startAnimation()
}, [])

    return (
        <Animated.View style={[styles.marker,animatedStyle]}/>
    )
}

const styles = StyleSheet.create({
    marker:{
        width:40,height:40,borderRadius:20,backgroundColor:'white',
        borderWidth:4,borderColor:'orange'
    }
})
