import axios from 'axios';
import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Platform,PermissionsAndroid,Image, ActivityIndicator } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function ImagePickerSample() {
    const [filePath, setFilePath] = useState({})
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    //Custom Button Component
const AppButton=({onPress,title})=> (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.appButtonContainer}>
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
    else return true;
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
    else return true;
}
//Capture Photo From Camera:::launchCamera(options?,callbackFunction)
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
    if ((isCameraPermitted && isStoragePermitted)) {
        
        launchCamera(options, (response)=>{
            //console.log("launchCamera Response =",response)
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
            setFilePath(response)//set to filePath state
        });
 
       
    }
}
//Choose File From Device:::launchImageLibrary(options?,callbackFunction)
const chooseFile = (type)=>{
    let options={mediaType:type,maxWidth:300,maxHeight:500,quality:1}
    launchImageLibrary(options,(response)=>{
        //console.log("Response=",response);
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
            setFilePath(response)//set to filePath state
    })
}
//Upload Image to WebService
uploadImageToApi=response=>{
    setLoading(true);
    setError(false);
    axios.post('https://605641c2055dbd0017e83e2c.mockapi.io/Upload',
    {uri:response.uri,type:response.type,name:response.fileName})
        .then(result =>{alert(result.data.id + "-" + result.data.type);setLoading(false);})
        .catch(error=>{alert(error);setLoading(false);setError(true);})
}

uploadImageToLocal=response=>{
    setLoading(true);
    setError(false);
    const data = new FormData();
    data.append('fileData',{uri:response.uri,type:response.type,name:response.fileName})
    //FormData Methods: append-delete-entries-get-getAll-has-keys-set-values
    const config = {headers:{'Accept':'application/json','Content-type':'multipart/form-data'}}
    /*axios.post('http://localhost:3001/upload',data,config)
        .then(result =>{console.log(result);setLoading(false);})
        .catch(error=>{alert(error);setLoading(false);setError(true);})*/
        try {
            const requestApi = axios.post('http://localhost:3001/upload',data,config);
            /*console.log(requestApi);*/ setLoading(false);
        } catch (err) {
            setLoading(false);setError(true);
        }
}
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
            <Image source={{uri:filePath.uri}} style={styles.avatar}/>
            {loading && <ActivityIndicator size={'small'}/>}
            {error && <Text style={{textAlign:'center'}}>An error occurred while uploading.</Text>}
            </View>
            <Text>Path:{filePath.uri}</Text>
            <AppButton onPress={()=> uploadImageToApi(filePath)} title="Upload to API"></AppButton>
            <AppButton onPress={()=> uploadImageToLocal(filePath)} title="Upload to Local"></AppButton>
            <AppButton onPress={()=> captureImage('photo')} title="Launch Camera For Image"></AppButton>
            <AppButton onPress={()=> captureImage('video')} title="Launch Camera For Video"></AppButton>
            <AppButton onPress={()=> chooseFile('photo')} title="Choose Image"></AppButton>
            <AppButton onPress={()=> chooseFile('video')} title="Choose Video"></AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
container:{flex:1,padding:10,alignItems:'center'},
appButtonContainer:{width:250,height:50,marginTop:15,backgroundColor:'#09aeae',padding: 15,borderRadius:50},
appButtonText:{color:'white',fontSize:15,justifyContent:'center',textAlign:'center'},
containerImage:{height:300,width:300,margin:5,borderWidth:2,borderStyle:'dashed',borderColor:'#DDD',borderRadius:5},
avatar:{height:300,width:300}
})
