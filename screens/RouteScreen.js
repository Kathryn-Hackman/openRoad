import React from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';
import {TotalRoute, TravelTime, Waypoint} from '../components/RouteComponents';

export default function RouteScreen(props){
      console.log("Navigating to..............................");
      const {params} = props.navigation.state;
      //console.log(params);


      const wholeParams = params;
      //console.log("WHOLE PARAMS")
      //console.log(wholeParams)
      const waypoints = wholeParams.waypoints;
    // console.log("WAYPOINTS")
      //console.log(waypoints)
      var waypointBlocks = [];



      for(let i = 0; i < waypoints.length; i++){
        //console.log("pushing waypoint:");
        //console.log(waypoints[i]);
        waypointBlocks.push(
          <Waypoint location={waypoints[i]}></Waypoint>
        )
        if(i!=waypoints.length - 1){
          //console.log(waypoints.slice(0,i+1));
          //console.log(waypoints.slice(i+1));
        //console.log("pushing TravelTime:");

          waypointBlocks.push(
                      <TravelTime start={waypoints.slice(0,i+1)}
                      end={waypoints.slice(i+1)}
                      time="sdfsf"
                      navigation={props.navigation}
                      wholeParams={wholeParams}></TravelTime>
          )

        }
      }

      console.log(waypointBlocks)

      return (
        <View>
          <ScrollView>
            <TotalRoute/>
            <Text>here is some text:</Text>
            {waypointBlocks}
          </ScrollView>

        </View>

  ); 
}