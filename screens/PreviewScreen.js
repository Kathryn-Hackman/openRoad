import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { ExpoLinksView } from '@expo/samples';
import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';
import  { Marker } from 'react-native-maps';

//to get the user's current location
//Geolocation.getCurrentPosition(info => console.log(info));

export default function PreviewScreen(){
      return (
        <MapView
          style ={styles.map}
          region={{
            latitude: 42.34817,
            longitude:-71.106972,
            latitudeDelta:0.0922,
            longitudeDelta:.0421,
          }}
        >
          <Marker style = {styles.mapMarker}
            coordinate={{latitude:42.34817, longitude:-71.106972}}
            title={"First Marker"}
            description={"this is the first marker"}
          />
        </MapView>
  ); 
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
}});
