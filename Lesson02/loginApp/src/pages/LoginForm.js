import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';
import LAButton from '../components/LAButton';

 export default class LoginForm extends Component {
   render() {
     return (
         <View>
             <Text style={styles.signInText}>Sign In</Text>
             <Input
                 returnKeyType={"next"}
                 autoCapitalize="none"//ilk harfi büyük yapma
                 placeholder="Username" 
                 //onSubmitEditing Enter/Onay tuşuna basılınca yapılacaklar
                 onSubmitEditing={() => this.passwordInput.focus()}/>
             <Input
             /*Ref yapısı bizlere React uygulamalarımızda DOM elementleri veya React elementlerine
              doğrudan erişim sağlama imkanı sunar. Bunu bir nevi JavaScript’in kendisinde bulunan
               document.querySelector() gibi */
                inputRef={input => this.passwordInput = input}
                 returnKeyType={"go"}
                 secureTextEntry={true}//password alanı
                 placeholder="Password" />

            <LAButton
            color={"#f1f1f1"}
            backgroundColor={"#0065e0"}
            text={"Sign In Now"}/>
         </View>
     );
   }
 }
 const styles = StyleSheet.create({
 	signInText: {
 		marginVertical: 10,
 		fontSize: 14,color: '#333'
 	}
 });