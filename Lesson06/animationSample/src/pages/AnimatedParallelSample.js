import React, { useEffect } from 'react'
import { Animated, Button, Easing,  Text, View } from 'react-native'

export default function AnimatedParallelSample() {
    let animationValue01 = new Animated.Value(0)
    let animationValue02 = new Animated.Value(0)
    let animationValue03 = new Animated.Value(0)

    const playAnimation = () => {
        animationValue01.setValue(0)
        animationValue02.setValue(0)
        animationValue03.setValue(0)

        const makeAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(value, { toValue: 1, duration, easing, delay, useNativeDriver: false })
        }

        Animated.parallel([
            makeAnimation(animationValue01, 2000, Easing.ease),
            makeAnimation(animationValue02, 1000, Easing.ease, 1000),
            makeAnimation(animationValue03, 1000, Easing.ease, 2000),
        ]).start()
    }

    const scaleText = animationValue01.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 2]
    })

    const spinText = animationValue02.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '720deg']
    })


    const introButton = animationValue03.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 400]
    })

    useEffect(() => {
        playAnimation();
    }, [])
    return (
        <View style={{ marginTop: 100, alignItems: 'center' }}>
            <Animated.View style={{ transform: [{ scale: scaleText }] }}>
                <Text>Hi React Animated -scale</Text>
            </Animated.View>

            <Animated.View style={{ transform: [{ rotate: spinText }] }}>
                <Text style={{ fontSize: 20 }}>Animated.Parallel() -spingText</Text>
            </Animated.View>

            <Animated.View style={{ top: introButton, position: 'absolute' }}>
                <Button onPress={playAnimation}
                    title="Play Again"
                    style={{ padding: 10, backgroundColor: 'blue' }}
                />
            </Animated.View>
        </View>
    )
}

