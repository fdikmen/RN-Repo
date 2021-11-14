import React from 'react'
import { StyleSheet, Text, View ,Animated, TouchableHighlight, ScrollView, Easing} from 'react-native'

export default function EasingView() {
    let animatedValue = new Animated.Value(0);
    const animateFunc = (easing)=>
    {
        animatedValue.setValue(0);
        Animated.timing(animatedValue,{toValue:1,duration:1000,easing,useNativeDriver:false}).start();
    }
    const marginLeft = animatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[0,260]
    })

    const CustomButton = ({onPress,title})=>
    (
        <TouchableHighlight onPress={onPress} style={styles.customButtonStyle}>
            <Text>{title}</Text>
        </TouchableHighlight>
    )
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.block,{marginLeft}]}/>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.containerText}>Scroll for more Easing</Text>
                <CustomButton title='Bounce' onPress={()=>animateFunc(Easing.bounce)}/>
                <CustomButton title='Cubic' onPress={()=>animateFunc(Easing.cubic)}/>
                <CustomButton title='Back' onPress={()=>animateFunc(Easing.back(2))}/>
                <CustomButton title='Elastic' onPress={()=>animateFunc(Easing.elastic(2))}/>
                <CustomButton title='Ease' onPress={()=>animateFunc(Easing.ease)}/>
                <CustomButton title='InOut' onPress={()=>animateFunc(Easing.inOut)}/>
                <CustomButton title='In' onPress={()=>animateFunc(Easing.in)}/>
                <CustomButton title='Out' onPress={()=>animateFunc(Easing.out)}/>
                <CustomButton title='Quad' onPress={()=>animateFunc(Easing.quad)}/>
                <CustomButton title='Sin' onPress={()=>animateFunc(Easing.sin)}/>
                <CustomButton title='Linear' onPress={()=>animateFunc(Easing.linear)}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    customButtonStyle:{
        height:60,marginHorizontal:10,backgroundColor:'#EDEDED',
        justifyContent:'center',alignItems:'center',marginTop:10
    },
    scrollView:{marginTop:20,marginBottom:100,backgroundColor:'orange',paddingHorizontal:10},
    containerText:{color:'white',textAlign:'center',fontWeight:'bold'},
    block:{width:50,height:50,backgroundColor:'red'}
})
