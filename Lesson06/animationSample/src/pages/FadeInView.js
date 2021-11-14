import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,Animated} from 'react-native'

export default function FadeInView(props) {
    const [fadeAnimOpac,setFadeAnimOpac] = useState(new Animated.Value(0))//For Opacity start value
    //let fadeAnimOpac=new Animated.Value(0); fadeAnimOpac.setValue(1)
    //componetDidMount
    useEffect(() => {
        //codes
       Animated.timing(
        fadeAnimOpac,//my state
        {toValue:1,
            duration:5000//Time ms
        }
       ).start();//Start animation
    }, [])

    return (
        <Animated.View style={{...props.style,opacity:fadeAnimOpac}}>
                    {props.children}
        </Animated.View>
    )
}


