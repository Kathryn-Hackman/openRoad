import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { ExpoLinksView } from '@expo/samples';
import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';

//to get the user's current location
//Geolocation.getCurrentPosition(info => console.log(info));

export default function PreviewScreen(){
      return (
        <MapView
        style ={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude:-122.4324,
          latitudeDelta:0.0922,
          longitudeDelta:.0421,
        }}
        />
  ); 
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
}});
