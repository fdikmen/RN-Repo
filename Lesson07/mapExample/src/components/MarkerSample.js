import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import AnimatedMarker from './AnimatedMarker';
//import PERMISSIONS from 'react-native-permissions';

export default function MarkerSample() {
    const coordTopkapi = {
        latitude: 41.0117056810545, 
        longitude: 28.983421813127844,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }
// useEffect(() => {
//     const perm= PERMISSIONS.request('location')
//     if (perm !=='authorized') {
//         alert("Please Check Permissons...")
//     }
// }, [])
    const markers = [
        {
            title: "Marker Title 01",
            description: "Marker description 01...",
            latlng: {
                latitude: 41.0117,
                longitude: 28.9834,
            }
        },
        {
            title: "Marker Title 02",
            description: "Marker description 02...",
            latlng: {
                latitude: 41.0217,
                longitude: 28.9834,
            }
        },
        {
            title: "Marker Title 03",
            description: "Marker description 03...",
            latlng: {
                latitude: 41.0317,
                longitude: 28.9834,
            }
        }
    ]
    return (
        <MapView
        showsUserLocation={true}
        loadingEnabled={true}
        style={styles.map}        
        initialRegion={coordTopkapi}
      >
          {/* <Marker coordinate={coordTopkapi}
          title={"Topkapı Marker"}
          description={"Topkapı Place /Istanbul-Turkey"}          /> */}
          {
              markers.map((marker,index)=>(
                  <Marker key={index}
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
                  //image={require('../assets/marker.png')}
                  //style={{width:48,height:48}}
                  >
                      {/* <View style={{width:20,height:20,borderRadius:10,backgroundColor:'orange'}}>
                          <Text>Marker</Text>
                          </View> */}
                          <AnimatedMarker/>
                      </Marker>
              ))
          }
          </MapView>
    )
}

const styles = StyleSheet.create({
    map: { flex: 1 },})
