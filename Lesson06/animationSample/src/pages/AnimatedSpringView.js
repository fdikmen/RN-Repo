import React from 'react'
import { Animated, Button, StyleSheet, Text, View } from 'react-native'

export default function AnimatedSpringView() {
    let springValue = new Animated.Value(0)

    const playSpring = () => {
        springValue.setValue(0.3)
        Animated.spring(springValue, { toValue: 1, friction: 1, useNativeDriver: false }).start()
    }

    return (
        <View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={playSpring} title="Spring Test" color="red" />
            <Animated.Image style={{ width: 230, height: 200, transform: [{ scale: springValue }] }}
                source={require('../assets/smile.png')} />
        </View>
    )
}

const styles = StyleSheet.create({})
