import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Dimensions, PermissionsAndroid, Platform } from 'react-native';
import MapView from 'react-native-maps';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const MapComponent = () => {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app requires access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          navigator.geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              setCurrentRegion({
                latitude,
                longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              });
            },
            error => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        } else {
          Platform.OS === "android" && alert('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, []);
    
  const mapViewRef = useRef(null);

  const camera =  {
    center: {
        latitude: 10.775382995605469,
        longitude: 106.68632109704656,
        latitudeDelta: 0.002305,
        longitudeDelta: 0.0010525,
    }
  };
  mapViewRef.current?.animateCamera(camera, {duration: 1});
    
  const handleRegionChange = region => {
    setCurrentRegion(region);
  };

  return (
      <MapView
      ref={mapViewRef}
      style={styles.map}
      region={currentRegion} // Set the region to currentRegion
      onRegionChange={handleRegionChange} // Update currentRegion when the map is moved
      showsUserLocation={true}
          followsUserLocation={true}
          animateToRegion
    />
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.2,
        marginTop: SCREEN_HEIGHT * 0.02,
    borderRadius: SCREEN_WIDTH * 0.015,
  },
});
