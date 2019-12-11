import React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { ExpoLinksView } from '@expo/samples';
import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';
import  { Marker } from 'react-native-maps';
import { Linking } from 'expo';

//to get the user's current location
//Geolocation.getCurrentPosition(info => console.log(info));

function getMarkers(props) {
  const {params} = props.navigation.state;
  var waypointMarkerColor = '#0000FF';
  var startMarkerColor = '#1B97A1';
  var endMarkerColor = '#FF0000';
  markers = [];
  for (i = 0; i < params.waypoints.length; i++) {
    markers.push(
      <Marker key = {params.waypoints[i].name} style = {styles.mapMarker}
        pinColor= { startMarkerColor }
        coordinate={{latitude: params.waypoints[i].lat, longitude: params.waypoints[i].lng}}
        title={params.waypoints[i].name}
        description={params.waypoints[i].addr}
      />
    )
    
  }
  return markers;
}

function averageMaxMinLat(props) {
  const {waypoints} = props.navigation.state.params;
  var minLat = parseFloat(waypoints[0].lat);
  var minLng = parseFloat(waypoints[0].lng);
  var maxLat = parseFloat(waypoints[0].lat);
  var maxLng = parseFloat(waypoints[0].lng);

  for (i = 0; i < waypoints.length; i++){
    if (parseFloat(waypoints[i].lat) < minLat){
      minLat = parseFloat(waypoints[i].lat);
    }
    if (parseFloat(waypoints[i].lat) > maxLat){
      maxLat = parseFloat(waypoints[i].lat);
    }
    if (parseFloat(waypoints[i].lng) < minLng){
      minLng = parseFloat(waypoints[i].lng);
    }
    if (parseFloat(waypoints[i].lng) > maxLng){
      maxLng = parseFloat(waypoints[i].lng);
    }
  }
  var centerLat = (minLat + maxLat) /2;
  var centerLng = (minLng + maxLng) /2;

  var diffLat = Math.abs(maxLat - minLat)*1.3;
  var diffLng = Math.abs(maxLng - minLng)*1.3;

  return [centerLat, centerLng, diffLat, diffLng];

}

function buildFullRouteUrl(props){
  const {waypoints} = props.navigation.state.params;
  var url = 'https://maps.google.com/?daddr=';
  // url += waypoints[0].lat + ',' + waypoints[0].lng;
  for (i = 1; i < waypoints.length; i++){
    url += '+to:' + waypoints[i].lat + ',' + waypoints[i].lng;
}
return url;
}

export default function PreviewScreen(props){
    var parametersFromPrevPage = props.navigation.state.params;
    var fullRouteUrl = buildFullRouteUrl(props);
    console.log(parametersFromPrevPage.lat);
    console.log(parametersFromPrevPage.long);

    var values = averageMaxMinLat(props);
    
      return (
        <MapView
          style ={styles.map}
          region={{
            latitude: values[0],
            longitude: values[1],
            latitudeDelta: values[2],
            longitudeDelta: values[3],
          }}
        > 
        {getMarkers(props)}
        <TouchableOpacity style = {styles.buttonStyle} activeOpacity = {.6} onPress={() => Linking.openURL(fullRouteUrl)}>
          <Text style = {styles.textStyle}>Open Navigation</Text>
        </TouchableOpacity>
        </MapView>
  ); 
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'

  },
  textStyle: {
    fontFamily: 'work-sans',
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    justifyContent: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
}});
