import React, { useState } from 'react'
import { StyleSheet, Text, View, Platform, UIManager, TouchableOpacity, LayoutAnimation } from 'react-native'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) 
{ UIManager.setLayoutAnimationEnabledExperimental(true); }


export default function LayoutAnimationSample01() {
    const [expanded, setExpanded] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity
onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
                    setExpanded(!expanded);
                }}>
                    <Text style={styles.btnText}>Press me to {expanded ? "collapse" : "expand"}</Text>
            </TouchableOpacity>
            {expanded && (
                <View style={styles.box}>
                    <Text style={styles.boxText}> Hello !!!</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        padding:25,
        backgroundColor:"#FFEB3B",
        borderWidth:2,
        borderColor:"#FF5722",
        borderRadius:5
    },
    boxText:{fontSize:25,padding:10},
    btnText:{fontSize:25,padding:10,color:'orange'},
    container:{
        justifyContent:'center',
        alignItems:'center',
        overflow:'hidden'
    }
})
