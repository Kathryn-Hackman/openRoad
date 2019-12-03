import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';
import {TotalRoute, TravelTime, Waypoint} from '../components/RouteComponents';

export default function RouteScreen(props){
      const {params} = props.navigation.state;
      const initialTravelTime = params.travelTime;
      const waypoints = JSON.parse(params.waypoints);

      var waypointBlocks = [];



      for(let i = 0; i < waypoints.length; i++){

        waypointBlocks.push(
          <Waypoint location={waypoints[i]}></Waypoint>
        )
        if(i!=waypoints.length - 1){
          console.log(waypoints.slice(0,i+1));
          console.log(waypoints.slice(i+1));
          waypointBlocks.push(
                      <TravelTime start={waypoints.slice(0,i+1)}
                      end={waypoints.slice(i+1)}
                      time="sdfsf"
                      navigation={props.navigation}></TravelTime>
          )

        }
      }

      return (
        <View>
          <TotalRoute/>
          <Text>here is some text:</Text>
          {waypointBlocks}
        </View>

  ); 
}