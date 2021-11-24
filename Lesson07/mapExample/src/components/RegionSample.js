import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';

export default function RegionSample() {
    const [myRegion, setMyRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      })

      useEffect(() => {
         setTimeout(() => {
            setMyRegion({
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              })
         }, 3000);
      }, [])

    return (
        <MapView
        loadingEnabled={true}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={myRegion}
      />
    )
}

const styles = StyleSheet.create({
    map: { flex: 1 },})
