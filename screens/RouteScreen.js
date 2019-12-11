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
    var h = Math.floor(x / 3600); 
    var m = Math.floor(x % 3600 / 60);
    return (h + 'h' + ' ' + m + 'm');
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
        <Waypoint key={waypoints[i].name} location={waypoints[i]} index={i} wholeParams={wholeParams} navigation={props.navigation}></Waypoint>
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

styles = StyleSheet.create({
  buttonStyle: {
    marginTop:20,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    marginBottom: 20,
    backgroundColor:'#ff9800',
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
})

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
      <View style = {{height: '100%', backgroundColor: '#ffce07'}}>
        <ScrollView>
        <View><Text style = {{textAlign:'right', fontFamily: 'work-sans', color: '#eef9fe', fontSize: 14, color: '#eef9fe', paddingRight:5, paddingTop:8}}>Edit Journey</Text></View>
          <Text style={{textAlign:'right', fontFamily: 'work-sans', color: '#eef9fe', fontSize: 14, color: '#eef9fe', paddingRight:5}}>{params.name}</Text>
          <Text style={{textAlign:'right', fontFamily: 'work-sans', color: '#eef9fe', fontSize: 14, color: '#eef9fe', paddingRight:5}}>Estimated Trip Time:</Text>
          <Text style={{textAlign:'right', fontFamily: 'work-sans', color: '#eef9fe', fontSize: 14, color: '#eef9fe', paddingRight:5}}>{this.secToHour(waypointsBlocksRetVal[1] + this.state.timeSum)} / {this.secToHour(params.time)}</Text>
          {waypointsBlocksRetVal[0]}
        <TouchableOpacity style = {this.styles.buttonStyle} onPress={() => this.props.navigation.navigate('Preview', params)}>
          <Text style = {this.styles.textStyle}>Show Map Overview</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>

    ); 
  }
}
