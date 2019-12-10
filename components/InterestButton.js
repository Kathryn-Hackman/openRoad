import React from 'react';
import { TextInput, Text, Dimensions, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export class InterestButton extends React.Component  {
    
  findWaypointsOn(startList,endList){
    const url = "https://openroadflaskapp.herokuapp.com/";
    //console.log("Adding Waypoints...");
    var wholeParams = this.props.wholeParams;
    var start = startList[startList.length-1];
    var end = endList[0];
    const fullUrl = url+'getWaypoints?start='+encodeURIComponent(start.addr)+"&end="+encodeURIComponent(end.addr)+"&interests="+encodeURIComponent("['hiking','museums']")+"&num="+encodeURIComponent("1")
    //console.log(fullUrl);
    fetch(
      fullUrl
    )
      .then(res => res.json())
      .then(json => {
        //console.log("Call response:");
        //console.log(json);
        //console.log("waypoints found.");
        var newWaypoints = startList.concat(json.waypoints).concat(endList);
        //var passStringify = JSON.stringify(startList.concat(newWaypoints).concat(endList));
        //console.log("passStringify: " + passStringify);
        //var passParams = {waypoints:passStringify};
        wholeParams.waypoints = newWaypoints;
        //console.log("WHOLE PARAMS FROM ROUTE COMPONENT");
        //console.log(wholeParams)
        console.log("Navigating away..............................");
        this.props.navigation.navigate('Settings',wholeParams);
      });

  }


    handlePress(){
        const interest = this.props.interest;
        const wholeParams = this.props.wholeParams;
        const start = this.props.startList[this.props.startList.length-1];
        const end = this.props.endList[0];


        const url = "https://openroadflaskapp.herokuapp.com/";
        const urlWithParams = url+'getWaypoints?start='+encodeURIComponent(start.addr)+"&end="+encodeURIComponent(end.addr)+"&interests="+encodeURIComponent("['"+interest+"']")+"&num="+encodeURIComponent("1")
        console.log("Adding Waypoint for interest " + interest);
        console.log(urlWithParams);
    fetch(urlWithParams)
      .then(res => res.json())
      .then(json => {
        //console.log("Call response:");
        //console.log(json);
        //console.log("waypoints found.");
        var newWaypoints = this.props.startList.concat(json.waypoints).concat(this.props.endList);
        //var passStringify = JSON.stringify(startList.concat(newWaypoints).concat(endList));
        //console.log("passStringify: " + passStringify);
        //var passParams = {waypoints:passStringify};
        this.props.wholeParams.waypoints = newWaypoints;
        //console.log("WHOLE PARAMS FROM ROUTE COMPONENT");
        //console.log(wholeParams)
        console.log("Navigating away..............................");
        this.props.navigation.navigate('Route',this.props.wholeParams);
      });

    }


    render(){
    
    const interest = this.props.interest;


    return (
		<View>
		  <Button title = {this.props.interest} onPress = {() => this.handlePress()}></Button> 
		</View>
    );
  }
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
interestsButton: {
    //paddingTop: 0.2,
    flexDirection: 'row',
    marginTop: 0.05 * height,
    marginLeft: 0.08 * width,
    height: height * 0.09,
    width: height * 0.09,
    borderRadius: height * 0.09,
    backgroundColor: 'rgb(195,125,198)',
  },
})


  