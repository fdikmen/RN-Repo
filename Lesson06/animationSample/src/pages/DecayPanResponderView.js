import React,{useRef} from 'react'
import { Animated, PanResponder, StyleSheet, Text, View,Dimensions } from 'react-native'

export default function DecayPanResponderView() {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(PanResponder.create(
    {
      // Ask to be the responder:
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // gestureState.d{x,y} will be set to zero now
        pan.setOffset({
          x:pan.x._value,
          y:pan.y._value
        })
      },
      onPanResponderMove: Animated.event([null,
        {dx:pan.x , dy:pan.y}],{useNativeDriver:false}),
    
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        pan.flattenOffset();
        Animated.decay(pan, { 
          deceleration: 0.997, 
          velocity: { x: gestureState.vx, y: gestureState.vy },
        useNativeDriver:false }).start();

      }
     
      
    }
  )).current;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag this box!!!</Text>
      <Animated.View 
      style={{transform:[{translateX:pan.x},{translateY:pan.y}]}}
      {...panResponder.panHandlers}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Drag Me!</Text>
        </View>
        </Animated.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{alignItems:'center',justifyContent:'center'},
  titleText:{fontSize:15,lineHeight:25,fontWeight:'bold'},
  box:{height:150,width:150,backgroundColor:'orange',borderRadius:5,alignItems:'center',justifyContent:'center'},
  boxText:{color:'#fff',fontSize:20,fontWeight:'bold'}
})
