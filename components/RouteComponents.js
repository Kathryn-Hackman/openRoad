import React from 'react';
import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

export class TotalRoute extends React.Component  {

  render(){//you need to set a title
    return (
		<View style={styles.container}>
		  <Text>{this.props.title}</Text>
		  
		</View>
    );
  }
}



export class TravelTime extends React.Component  {
  
  findWaypointsOn(startList,endList){
    const url = "https://openroadflaskapp.herokuapp.com/";
    console.log("Adding Waypoints...");
    
    var start = startList[startList.length-1];
    var end = endList[0];

    console.log(url+'getWaypoints?start='+encodeURIComponent(start)+"&end="+encodeURIComponent(end)+"&interests="+encodeURIComponent("['hiking','museums']")+"&num="+encodeURIComponent("3"));
    fetch(
      url+'getWaypoints?start='+encodeURIComponent(start)+"&end="+encodeURIComponent(end)+"&interests="+encodeURIComponent("['hiking','museums']")+"&num="+encodeURIComponent("3")
    )
      .then(res => res.json())
      .then(json => {
        console.log("Call response:");
        console.log(json);
        console.log("waypoints found.");
        var newWaypoints = json.waypoints;
        var passStringify = JSON.stringify(startList.concat(newWaypoints).concat(endList));
        console.log("passStringify: " + passStringify);
        var passParams = {waypoints:passStringify};
        this.props.navigation.navigate('Route',passParams);
      });

  }


  render(){
    console.log(this.props.start);
    console.log(this.props.end);

    
    return (
    <View>
      <TouchableOpacity style={{ backgroundColor: "#0DC2D1", height: 30, width:30, marginTop: -15, marginBottom: -15, alignSelf: 'flex-end', zIndex: 5}} onPress={() => this.findWaypointsOn(this.props.start,this.props.end)}>
        <Text>+</Text>
      </TouchableOpacity>
      
    </View>
    );
  }
}


export class Waypoint extends React.Component  {

  render(){
    return (
    <View>
      <TouchableOpacity style={{ backgroundColor: "#FFCA35", borderWidth: 3, borderColor: "#0DC2D1", height: 100}}>
        <Text>{JSON.stringify(this.props.location)}</Text>
      </TouchableOpacity>
      
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
});