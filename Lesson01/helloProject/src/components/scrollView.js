import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const scrollView = () => {
    return (
        <View style={styles.myView}>
            <ScrollView horizontal={true}>
            <Text style={styles.myText}>Number 01</Text>
            <Text style={styles.myText}>Number 02</Text>
            <Text style={styles.myText}>Number 03</Text>
            <Text style={styles.myText}>Number 04</Text>
            <Text style={styles.myText}>Number 05</Text>
            <Text style={styles.myText}>Number 06</Text>
            <Text style={styles.myText}>Number 07</Text>
            <Text style={styles.myText}>Number 08</Text>
            <Text style={styles.myText}>Number 09</Text>
            <Text style={styles.myText}>Number 10</Text>
            <Text style={styles.myText}>Number 11</Text>
            <Text style={styles.myText}>Number 12</Text>
            <Text style={styles.myText}>Number 13</Text>
            </ScrollView>
        </View>
    )
}

export default scrollView

const styles = StyleSheet.create({
    myView:{backgroundColor:'orange',flex:1,flexDirection:'column'},
myText:{margin:10,padding:30,backgroundColor:'white',textAlign:'center'}
})
