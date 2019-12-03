import React from 'react';
import { TextInput, Text, View, StyleSheet, Button} from 'react-native';

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

  findWaypointsOn(start,end){
    return start+end;
  }

  render(){
    const stringList = ["Amherst, MA","Springfield, MA","Raleigh, NC"];

    console.log(this.props.start);
    console.log(this.props.end);
    const passString = '["Boston, MA","Amherst, MA","Syracuse, NY"]';
    const passStringifyOld = JSON.stringify(this.props.start.concat([stringList[Math.floor(Math.random() * stringList.length)]]).concat(this.props.end));
    const passStringify = JSON.stringify(this.props.start.concat([this.findWaypointsOn(this.props.start[this.props.start.length-1],this.props.end[0])]).concat(this.props.end));
    const passParams = {waypoints:passStringify};
    console.log(passString);
    console.log(passStringify);
    return (
    <View>
      <Button
        title = {"travel time =  ".concat(this.props.time) + " (click to add stops)"}
        onPress={() => this.props.navigation.navigate('Route',passParams)}></Button>
      
    </View>
    );
  }
}


export class Waypoint extends React.Component  {

  render(){
    return (
    <View>
      <Button title={this.props.location}
              color="#0E8629"></Button>
      
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