import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Platform,PermissionsAndroid } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//Custom Button Component
const AppButton=({onPress,title})=> (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
)

//Control for android camera permisson
const requestCameraPermisson = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA, { title: 'Camera Permission', message: 'App needs camera permisson' }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED; // PermissionsAndroid.RESULTS.DENIED

        } catch (error) {
            console.warn(error);
            return false;
        }
    }
    else return false;
}

//Control for android ExternalWrite permisson
const requestExternalWritePermisson = async () => {
    if (Platform.OS === 'android') {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                { title: 'External Storage Write Permission', message: 'App needs write permisson' }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED; // PermissionsAndroid.RESULTS.DENIED

        } catch (error) {
            console.warn(error);
            alert('Write permisson err:', error)
            return false;
        }
    }
    else return false;
}

//Capture Photo From Camera
const captureImage = async(type)=>{
    let options = {
        mediaType:type,
        maxWidth:300,
        maxHeight:500,
        quality:1,
        videoQuality:'low',
        durationLimit:30,
        saveToPhotos:true
    }
    let isCameraPermitted = await requestCameraPermisson();
    let isStoragePermitted = await requestExternalWritePermisson();
    if (isCameraPermitted && isStoragePermitted) {
        
        launchCamera(options, (response)=>{
            console.log("Response =",response)
            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            }
            else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device.');
                return;
            }
            else if (response.errorCode == 'permission') {
                alert('Permisson not satisfied.');
                return;
            }
            else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log('base64 ->', response.base64);
            console.log('URI ->',response.uri);
            console.log('width ->',response.width);
            console.log('height ->',response.height);
            console.log('fileSize ->',response.fileSize );
            console.log('type ->',response.type);
            console.log('fileName ->',response.fileName);
            
            
        });

       
    }
}

export default function ImagePickerSample() {
    const [filePath, setFilePath] = useState({})
    return (
        <View style={styles.container}>
            <AppButton onPress={()=>alert("App Button")} title="Test Button"></AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
container:{flex:1,padding:10,alignItems:'center'},
appButtonContainer:{width:250,height:50,marginTop:15,backgroundColor:'#09aeae',padding: 15,borderRadius:50},
appButtonText:{color:'white',fontSize:15,justifyContent:'center',textAlign:'center'}
})
