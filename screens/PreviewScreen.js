import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { ExpoLinksView } from '@expo/samples';
import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';
import  { Marker } from 'react-native-maps';

//to get the user's current location
//Geolocation.getCurrentPosition(info => console.log(info));


export default function PreviewScreen(props){
    var waypointMarkerColor = '#0000FF';
    var startMarkerColor = '#008000';
    var endMarkerColor = '#FF0000';
    var parametersFromPrevPage = props.navigation.state.params;
    console.log(parametersFromPrevPage.lat);
    console.log(parametersFromPrevPage.long);

    
      return (
        <MapView
          style ={styles.map}
          region={{
            latitude: parametersFromPrevPage.lat,
            longitude: parametersFromPrevPage.long,
            latitudeDelta:0.0922,
            longitudeDelta:.0421,
          }}
        >
          <Marker style = {styles.mapMarker}
            pinColor= { startMarkerColor }
            coordinate={{latitude:42.34817, longitude:-71.106972}}
            title={"Start"}
            description={"marker for the start point"}
          />
        </MapView>
  ); 
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
}});
