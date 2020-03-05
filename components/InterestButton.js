import React from 'react';
import { TextInput, Text, Dimensions, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import * as FileSystem from 'expo-file-system';
import Icon from 'react-native-vector-icons/Ionicons';

export class InterestButton extends React.Component  {
    
  findWaypointsOn(startList,endList){
    const url = "https://openroadflaskapp.herokuapp.com/";
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
        var newWaypoints = startList.concat(json.waypoints).concat(endList);
        wholeParams.waypoints = newWaypoints;
        this.props.navigation.navigate('Settings',wholeParams);
      });

  }


    handlePress(interest){
        const wholeParams = this.props.wholeParams;
        const start = this.props.startList[this.props.startList.length-1];
        const end = this.props.endList[0];


        const url = "https://openroadflaskapp.herokuapp.com/";
        const urlWithParams = url+'getWaypoints?start='+encodeURIComponent(start.addr)+"&end="+encodeURIComponent(end.addr)+"&interests="+encodeURIComponent("['"+interest+"']")+"&num="+encodeURIComponent("1")
        // console.log("Adding Waypoint for interest " + interest);
        // console.log(urlWithParams);
    fetch(urlWithParams)
      .then(res => res.json())
      .then(json => {
        var newWaypoints = this.props.startList.concat(json.waypoints).concat(this.props.endList);
        this.props.wholeParams.waypoints = newWaypoints;
        // console.log('WHOLE PARAMS')
        // console.log(this.props.wholeParams)
        console.log('')
        saveJourney = async() => {
          console.log('inside savejourney')
        try {
          console.log('inside the try')
          // await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'workingJourney/', {intermediates:true})
          // console.log('made a directory')
          journeyInProgress = await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'workingJourney/journey.txt/', JSON.stringify(this.props.wholeParams));
          console.log('it worked')
          this.props.navigation.navigate('Route',this.props.wholeParams);
        }
        catch(e) {
          console.log(e);
        }
      }
      saveJourney()
      });

    }


    render(){
    
    const interest1 = this.props.interest1;
    const interest2 = this.props.interest2;



    return (
        <View style={styles.container}>
        <ActionButton buttonTextStyle = {styles.actionButtonText} size = {90} buttonText = {interest1} position = 'left' buttonColor="#FFCE07" onPress = {() => this.handlePress(interest1)}>
        </ActionButton>
        <ActionButton buttonTextStyle = {styles.actionButtonText} size = {90} buttonText = {interest2} buttonColor="#FFCE07" onPress = {() => this.handlePress(interest2)}>
        </ActionButton>
      </View>
    );
  }
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10
    },
    actionButtonText: {
        color: 'black',
        fontSize: 11
    }
});


  