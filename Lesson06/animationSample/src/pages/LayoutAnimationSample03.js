import React, { useState } from 'react'
import { StyleSheet, Text, View ,Platform, UIManager, LayoutAnimation, Button} from 'react-native'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default function LayoutAnimationSample03() {
    const [firstBoxPosition, setFirstBoxPosition] = useState("left")
    const [secondBoxPosition, setSecondBoxPosition] = useState("left")
    const [thirdBoxPosition, setThirdBoxPosition] = useState("left")

    const toggleFirstBox = ()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setFirstBoxPosition(firstBoxPosition === 'left' ? 'right' : 'left')
    }
    const toggleSecondBox = ()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
        setSecondBoxPosition(secondBoxPosition === 'left' ? 'right' : 'left')
    }
    const toggleThirdBox = ()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        setThirdBoxPosition(thirdBoxPosition === 'left' ? 'right' : 'left')
    }

    return (
        <View style={styles.container}>

        <View style={styles.btnContainer}>
            <Button style={styles.btn} title="EaseInEaseOut Play!" onPress={toggleFirstBox}/>
        </View>
        <View style={[styles.box,firstBoxPosition === 'left' ? null : styles.moveRight]}/>

           <View style={styles.btnContainer}>
               <Button style={styles.btn} title="Linear Play!" onPress={toggleSecondBox}/>
           </View>
           <View style={[styles.box,secondBoxPosition === 'left' ? null : styles.moveRight]}/>

           <View style={styles.btnContainer}>
               <Button style={styles.btn} title="Spring Play!" onPress={toggleThirdBox}/>
           </View>
           <View style={[styles.box,thirdBoxPosition === 'left' ? null : styles.moveRight]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{alignItems:'flex-start',justifyContent:'center'},
    box:{height:100,width:100,borderRadius:5,margin:10,backgroundColor:'orange'},
    btn:{color:'white',fontSize:15},
    btnContainer:{alignSelf:'center',backgroundColor:'orange'},
    moveRight:{alignSelf:"flex-end",height:250,width:250}
})

