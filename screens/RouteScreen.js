import React, {Component} from 'react';
import { Button, Text, View, StyleSheet, ScrollView} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';
import {TotalRoute, Waypoint} from '../components/RouteComponents';
import TravelTime from '../components/TravelTime';

export default class RouteScreen extends Component {
  getWaypointBlocks(props){
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
        <Waypoint key={waypoints[i].name} location={waypoints[i]}></Waypoint>
      )
      if(i!=waypoints.length - 1){
        //console.log(waypoints.slice(0,i+1));
        //console.log(waypoints.slice(i+1));
      //console.log("pushing TravelTime:");
        startListToPush = waypoints.slice(0,i+1);
        endListToPush = waypoints.slice(i+1);
        console.log("Pushing traveltime");
        console.log(startListToPush)
        console.log(endListToPush);
        waypointBlocks.push(
                    <TravelTime 
                    key={startListToPush[startListToPush.length - 1].name+" to "+endListToPush[0].name}
                    keyString={startListToPush[startListToPush.length - 1].name+" to "+endListToPush[0].name}
                    startList={startListToPush}
                    endList={endListToPush}
                    navigation={props.navigation}
                    wholeParams={wholeParams}></TravelTime>
        )

      }
    }

    console.log(waypointBlocks)
    return waypointBlocks
  }

  render(){
    return (
      <View>
        <ScrollView>
          <TotalRoute/>
          <Text>here is some text:</Text>
          {this.getWaypointBlocks(this.props)}
        </ScrollView>

      </View>

    ); 
  }
}
