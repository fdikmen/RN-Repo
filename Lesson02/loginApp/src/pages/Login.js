import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView,KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <View>
                <KeyboardAvoidingView  behavior={"position"}>
                <View style={styles.headBackground}>
                    <View>
                        <Text style={styles.logo}> Logo </Text>
                        <Text style={styles.logoText}> Slogan </Text>
                    </View>
                </View>
                <ScrollView style={{ marginTop: 150 }}>
                    <View style={styles.loginArea}>
                    <Text style={styles.loginAreaTitle}>Test APP Login</Text>
 						<Text style={styles.loginAreaDescription}>
                         Please login to use the application...
 						</Text>
                         <LoginForm />
                    </View>
                </ScrollView>
                <View style={styles.signUpArea}>
 						<Text style={styles.signUpDescription}>Don't have an account?</Text>
 						<TouchableOpacity>
 							<Text style={styles.signUpText}>Sign Up</Text>
 						</TouchableOpacity>
 					</View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    signUpArea: {alignItems: 'center'},
    signUpDescription: {color: '#999'},
    signUpText: {color: '#666'},
    loginAreaTitle: {
        fontSize: 20,
        textAlign: 'center'
    },
    loginAreaDescription: {
        fontSize: 11,
        color: '#7e868f',
        marginVertical: 10,
        textAlign: 'center'
    },
    loginArea: {
        margin: 40,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        shadowColor: 'black', shadowOpacity: .2, shadowRadius: 3, 
        shadowOffset: { width: 0, height: 2 },
        elevation: 4//Android de shadow özelliği için
    },
    logo: {
        paddingTop: 80,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f2f2f2'
    },
    logoText: {textAlign: 'center',color: '#f2f2f2'},
    headBackground: {
        position: 'absolute',
        top: 0,left: 0,
        height: 250,width: '100%',
        backgroundColor: '#1572DE',
        borderBottomRightRadius: 200,
        borderColor: '#1572DE'
    }
})
