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



export class TravelTimeTwo extends React.Component  {
  
  findWaypointsOn(startList,endList){
    const url = "https://openroadflaskapp.herokuapp.com/";
    console.log("Adding Waypoints...");
    var wholeParams = this.props.wholeParams;
    var start = startList[startList.length-1];
    var end = endList[0];
    const fullUrl = url+'getWaypoints?start='+encodeURIComponent(start.addr)+"&end="+encodeURIComponent(end.addr)+"&interests="+encodeURIComponent("['hiking','museums']")+"&num="+encodeURIComponent("1")
    console.log(fullUrl);
    fetch(
      fullUrl
    )
      .then(res => res.json())
      .then(json => {
        console.log("Call response:");
        console.log(json);
        console.log("waypoints found.");
        var newWaypoints = startList.concat(json.waypoints).concat(endList);
        //var passStringify = JSON.stringify(startList.concat(newWaypoints).concat(endList));
        //console.log("passStringify: " + passStringify);
        //var passParams = {waypoints:passStringify};
        wholeParams.waypoints = newWaypoints;
        console.log("WHOLE PARAMS FROM ROUTE COMPONENT");
        console.log(wholeParams)

        this.props.navigation.navigate('Route',wholeParams);
      });

  }

  travelTimeValue(startList,endList){
    const url = "https://openroadflaskapp.herokuapp.com/";
    var start = startList[startList.length-1];
    var end = endList[0];
    const fullUrl = url+'driveTime?start='+encodeURIComponent(start.addr)+"&end="+encodeURIComponent(end.addr)
    fetch(fullUrl)
      .then(res => res.json())
      .then(json => {
        console.log("Call response:");
        console.log(json);
        console.log("waypoints found.");
        console.log("HERE IS THE TRAVELTIME")
        console.log(json.time)
        return json.time;
      });
  }


  render(){
    console.log("TravelTime")
    console.log(this.props.start);
    console.log(this.props.end);

    titleTextTimeVal = this.travelTimeValue(this.props.start,this.props.end);
    console.log(titleTextTimeVal);
    titleText = "Travel time = " + titleTextTimeVal + " seconds. (Click to add a stop)"
    
    return (
    <View>
    <Button title = {titleText} onPress={() => this.findWaypointsOn(this.props.start,this.props.end)}/>
      
    </View>
    );
  }
}



export class TravelTime extends React.Component {//same as TravelTimeTwo but capable of handling async data
  constructor(props) {
    super();

    //console.log('This happens 1st.');

    this.state = {
      loading: 'initial',
      data: ''
    };

  }

  
  loadData(startList,endList) {
    const url = "https://openroadflaskapp.herokuapp.com/";
    var start = startList[startList.length-1];
    var end = endList[0];
    const fullUrl = url+'driveTime?start='+encodeURIComponent(start.addr)+"&end="+encodeURIComponent(end.addr)
    var promise = new Promise((resolve, reject) => { 
    fetch(fullUrl)
      .then(res => res.json())
      .then(json => {
        //console.log("THIS HAPPENS SIXTH? Call response:");
        //console.log(json);
        //console.log("waypoints found.");
        //console.log("HERE IS THE TRAVELTIME")
        //console.log(json.time)
        resolve(json.time);
      });
    });

    //console.log('This happens 4th.');

    return promise;
  }

  componentDidMount() {

    //console.log('This happens 3rd.');

    this.setState({ loading: 'true' });
    this.loadData(this.props.start,this.props.end)
    .then((data) => {
      //console.log('This happens 7th.');
      this.setState({
        data: data,
        loading: 'false'
      });
    });
  }  

  render() {

    if (this.state.loading === 'initial') {
      //console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
      return <Text>Intializing...</Text>;
    }


    if (this.state.loading === 'true') {
      //console.log('This happens 5th - when waiting for data.');
      return <Text>Loading...</Text>;
    }

    //console.log('This happens 8th - after I get data.');
    return (
    <View>
      <Button title = {"Travel time: " + this.state.data + " seconds. (Click to add a stop!)"} onPress={() => this.props.navigation.navigate('Settings',{wholeParams:this.props.wholeParams,startList:this.props.start,endList:this.props.end})}/>
      
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