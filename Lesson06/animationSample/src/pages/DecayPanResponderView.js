import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

export default function DecayPanResponderView() {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
          });
        },
        onPanResponderMove: Animated.event(
          [//Animated.Event( ), bizim yerimize animated değişkeni, kendi içinde setValue() kullanarak değiştirmektedir.
    //Rastgele verileri Animateddeğerlerle eşleştirmek için yardımcı bir metoddur. .
  //
            null,// raw event'i null geçiyoruz
            { dx: pan.x, dy: pan.y }// gestureState ,  _pan => referans
          ],
          {useNativeDriver: false}
        ),
        onPanResponderRelease: (e, gestureState) => {
          pan.flattenOffset();
          Animated.decay(pan, {
              deceleration: 0.997,
              velocity: { x: gestureState.vx, y: gestureState.vy },useNativeDriver:false
            }).start();
        }
      })
    ).current;
  
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Drag this box!</Text>
        <Animated.View
          style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }]
          }}
          {...panResponder.panHandlers}
        >
          <View style={styles.box}>
          <Text style={styles.boxText}>Drag Me</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center"
    },
    titleText: {
      fontSize: 14,
      lineHeight: 24,
      fontWeight: "bold"
    },
    box: {
      height: 150,
      width: 150,
      backgroundColor: "orange",
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    }, 
    boxText: {
      color: "#FFF",
      fontSize: 20,
      fontWeight: "bold"
    }
  });

