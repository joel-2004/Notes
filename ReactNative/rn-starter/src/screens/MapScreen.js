import React, { useEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import MapView from "react-native-maps"
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'
const MapScreen = () => {
    const [details, setDetails] = useState({ "latitude": 0, "longitude": 0 });

    const getLocation = async () => {
        try {
            const res = await requestForegroundPermissionsAsync();
            if (res.status !== "granted")
                return;
            const currPos = await getCurrentPositionAsync();
            setDetails({ latitude: currPos.coords.latitude, longitude: currPos.coords.longitude });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLocation();
    }, []);
    return (
        <>
            <Text>Hello to Map</Text>
            <MapView style={style.mapStyle}
                region={{
                    latitude: details.latitude,
                    longitude: details.longitude,
                    latitudeDelta: 0.90,
                    longitudeDelta: 0.90
                }}

                initialRegion={
                    {
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.90,
                        longitudeDelta: 0.90
                    }
                }
            ></MapView>
        </>
    )
}

const style = StyleSheet.create({
    mapStyle: { height: 500, width: 500 }
})

export default MapScreen