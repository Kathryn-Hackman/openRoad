import React from 'react';
import { TextInput, Text, Dimensions, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import ActionButton from 'react-native-action-button';
import * as FileSystem from 'expo-file-system';
import Icon from 'react-native-vector-icons/Ionicons';


export class CustomWaypoint extends React.Component  {

    // constructor() {
    //     super();
    //     console.log('constructor called');
    // }
    handleP(){
        console.log('here');
        console.log('and here');
    }
    // handleP= ()=>{
    //     alert('button clicked');
    //     console.log('HERE HERE HERE')
    //     const wholeParams = this.props.wholeParams;
    //     console.log('wholeParams')

    //     const url = "https://openroadflaskapp.herokuapp.com/";
    //     const urlWithParams = url+'queryToWaypoint?query='+encodeURIComponent(query)
    //     // console.log("Adding Waypoint for interest " + interest);
    //     console.log(urlWithParams);
    // fetch(urlWithParams)
    //   .then(res => res.json())
    //   .then(json => {
    //       console.log(json);
    //      var newWaypoints = json.waypoints;
    //      this.props.wholeParams.waypoints = newWaypoints;
    //     // console.log('WHOLE PARAMS')
    //     // console.log(this.props.wholeParams)
    //     console.log('')
    //     saveJourney = async() => {
    //       console.log('inside savejourney')
    //     try {
    //       console.log('inside the try')
    //       // await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'workingJourney/', {intermediates:true})
    //       // console.log('made a directory')
    //       journeyInProgress = await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'workingJourney/journey.txt/', JSON.stringify(this.props.wholeParams));
    //       console.log('it worked')
    //       this.props.navigation.navigate('Route',this.props.wholeParams);
    //     }
    //     catch(e) {
    //       console.log(e);
    //     }
    //   }
    //   saveJourney()
    //   });

    // }


    render(){
    

    
    return (
      <View style={styles.container}>
        <ActionButton onPress={()=>{this.handleP();}} buttonTextStyle = {styles.actionButtonText} size = {90} buttonText = 'Puppies' position = 'left' buttonColor="#FFCE07">
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