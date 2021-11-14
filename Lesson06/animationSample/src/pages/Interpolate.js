import React from 'react'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'

export default function Interpolate() {
    let animationValue = new Animated.Value(0);
    
    const playFunc=()=>{
        animationValue.setValue(0);
        Animated.timing(animationValue,
            {toValue:1,duration:2000,easing:Easing.linear,useNativeDriver:false})
            .start(()=>playFunc())
    }
        //ComDidMount
    React.useEffect(() => {
        playFunc()
    }, [])

    const marginLeft = animationValue.interpolate({
        inputRange:[0,1],
        outputRange:[0,300]
    })
    const opacity = animationValue.interpolate({
        inputRange:[0,0.5,1],
        outputRange:[0,1,0]
    })
    const movingMargin = animationValue.interpolate({
        inputRange:[0,0.5,1],
        outputRange:[0,300,0]
    })
    const textSize = animationValue.interpolate({
        inputRange:[0,0.5,1],
        outputRange:[20,40,20]
    })
    const rotateX = animationValue.interpolate({
        inputRange:[0,0.5,1],
        outputRange:['0deg','180deg','0deg']
    })


    return (
        <View style={{marginTop:100}}>
            <Animated.View style={{marginLeft,height:50,width:60,backgroundColor:'red'}}/>
            <Animated.View style={{opacity,height:50,width:'100%',marginTop:50,backgroundColor:'blue'}}/>
            <Animated.View style={{marginLeft:movingMargin,height:50,width:100,height:50,width:'100%',marginTop:50,backgroundColor:'orange'}}/>
            <Animated.Text style={{fontSize:textSize,marginTop:50,backgroundColor:'green'}}>
                Animated Text
            </Animated.Text>
            <Animated.View style={{transform:[{rotateX}],height:50,width:'80%',marginTop:50,backgroundColor:'black'}}>
                <Text style={{color:'white'}}>This is using TransformX</Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({})
