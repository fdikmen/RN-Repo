import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'
//Create array
const boxArray = []
for (let i = 0; i < 200; i++) {
    boxArray.push(i)   
}

export default class AnimatedSequenceSample extends Component {
    constructor(){
        super()
        //Set default value
        this.myAnimationValue = []
        boxArray.forEach((val)=>{
            this.myAnimationValue[val] = new Animated.Value(0)
        })
    }
    animate(){
        const myAllAnimations = boxArray.map((item)=>{
            return Animated.timing(this.myAnimationValue[item],{toValue:1,duration:1000,useNativeDriver:false})
        })
        //Animated.parallel(myAllAnimations).start();
        //Animated.sequence(myAllAnimations).start();
        Animated.stagger(10,myAllAnimations).start();
    }
    componentDidMount() {
        this.animate()
    }
    
    render() {
        const myAllAnimationsView = boxArray.map((val,i)=>{
            return <Animated.View key={i} 
            style={{opacity:this.myAnimationValue[val],height:50,width:50,backgroundColor:'orange',margin:3}}/>
        })
        return (
            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
               {myAllAnimationsView}
            </View>
        )
    }
}

