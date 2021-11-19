import React, { useState } from 'react'
import { StyleSheet, Text, View,Platform, UIManager, LayoutAnimation, Button } from 'react-native'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default function LayoutAnimationSample02() {
    const [boxPosition, setBoxPosition] = useState("left")
    const toggleBox = ()=>{
        LayoutAnimation.configureNext(
            LayoutAnimation.create(500,LayoutAnimation.Types.spring,LayoutAnimation.Properties.scaleXY)
        );
        setBoxPosition(boxPosition === "left" ? "right" : "left")
    }
    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <Button style={styles.btn} title="Toggle Process" onPress={toggleBox}/>
            </View>
            <View style={[styles.box,boxPosition === "left" ? null : styles.moveRight]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{alignItems:'flex-start',justifyContent:'center'},
    box:{height:100,width:100,borderRadius:5,margin:10,backgroundColor:'orange'},
    btn:{color:'white',fontSize:15},
    btnContainer:{alignSelf:'center',backgroundColor:'blue'},
    moveRight:{alignSelf:"flex-end",height:250,width:250}
})
