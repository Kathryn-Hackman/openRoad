import React, {Component} from 'react';
import { Button, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';
import {TotalRoute, Waypoint} from '../components/RouteComponents';
import TravelTime from '../components/TravelTime';

export default class RouteScreen extends Component {
  constructor(props) {
    super();
    this.arrayForTimes=0;
    this.numReturned=0;
    this.numForTT = 0;
    this.state = {
      loading: 'initial',
      timeSum: 0,
    };
  }

  secToHour(x){
    return Number.parseFloat(x/3600).toFixed(2);
  }

  add(accumulator, a) {
    return accumulator + a;
  }

  addTimeCallback(time){
    this._isMounted = true;
    console.log("CALLBACK CALLED");
    console.log(time)
    this.arrayForTimes+=(parseInt(time));
    this.numReturned+=1;
    console.log(this.arrayForTimes)
    console.log("arrayForTimes above. below is sum, then numRet, then len")
    console.log(this.arrayForTimes);
    console.log(this.numReturned)
    console.log(this.props.navigation.state.params.waypoints.length-1);
    if (this.numReturned == this.props.navigation.state.params.waypoints.length-1){
      console.log("i am satisfied")
      //arraySum = this.arrayForTimes.reduce(this.add,0); // with initial value to avoid when the array is empty

      //this.arrayForTimes = [0];
      this.numReturned = 0;
      this.setState({
        loading: 'false',
        timeSum: this.arrayForTimes
      });
      this.arrayForTimes = 0
    }
  }

  getWaypointBlocks(props){
    const {params} = props.navigation.state;


    const wholeParams = params;
    const waypoints = wholeParams.waypoints;
    var waypointBlocks = [];
    var travelTimeEstimate = 0;

    console.log("starting")

    for(let i = 0; i < waypoints.length; i++){

      waypointBlocks.push(
        <Waypoint key={waypoints[i].name} location={waypoints[i]}></Waypoint>
      )
      travelTimeEstimate += waypoints[i].time;
      if(i!=waypoints.length - 1){
        startListToPush = waypoints.slice(0,i+1);
        endListToPush = waypoints.slice(i+1);
        waypointBlocks.push(
                    <TravelTime 
                    key={waypoints.length+startListToPush[startListToPush.length-1].name+endListToPush[0].name}
                    keyString={startListToPush[startListToPush.length - 1].name+" to "+endListToPush[0].name}
                    startList={startListToPush}
                    endList={endListToPush}
                    navigation={props.navigation}
                    wholeParams={wholeParams}
                    callbackParam={(x) => this.addTimeCallback(x)}></TravelTime>
        )
        this.numForTT++;

      }
    }

    return [waypointBlocks,travelTimeEstimate]
  }

componentDidMount() {
    this._isMounted = true;
}

componentWillUnmount() {
   this._isMounted = false;
}

  render(){
    const {params} = this.props.navigation.state;


    //if (this.state.loading === 'initial') {
      //console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
    //  return <Text>Intializing...</Text>;
    //}


    //if (this.state.loading === 'true') {
      //console.log('This happens 5th - when waiting for data.');
    //  return <Text>Loading...</Text>;
    //}
    var waypointsBlocksRetVal = this.getWaypointBlocks(this.props);

    return (
      <View>
        <ScrollView>
          <Text>{params.name}</Text>
          <Text>{this.secToHour(waypointsBlocksRetVal[1] + this.state.timeSum)} hours out of {this.secToHour(params.time)} hours</Text>
          {waypointsBlocksRetVal[0]}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Preview', params)}><Text>Show Map Overview</Text></TouchableOpacity>
        </ScrollView>

      </View>

    ); 
  }
}
