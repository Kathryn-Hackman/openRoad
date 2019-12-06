import React from 'react';
import { Button, Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';

var url = "https://openroadflaskapp.herokuapp.com/";

var startTest = "Syracuse, NY"
var endTest = "Boston, MA"
var testType = "rtj"
var testName = "New Journey 7"

  
function createNewJourney(navigate,start,end,type,name) {
  
console.log("Creating New Journey...");
console.log(url+'newJourney?start='+encodeURIComponent(start)+"&end="+encodeURIComponent(end)+"&type="+encodeURIComponent("rtj")+"&name="+encodeURIComponent(name));
fetch(
	url+'newJourney?start='+encodeURIComponent(start)+"&end="+encodeURIComponent(end)+"&type="+encodeURIComponent("rtj")+"&name="+encodeURIComponent(name)
)
	.then(res => res.json())
	.then(json => {
		console.log("Call response:");
		console.log(json);
		console.log("New Journey Created.");
		console.log({waypoints:'["Boston, MA","Syracuse, NY"]'});
		console.log({waypoints:JSON.stringify(json["waypoints"])});
		passParams = {waypoints:JSON.stringify(json["waypoints"])};
		navigate('Route',passParams);
	});
}


export default function LinksScreen(props) {
const {navigate} = props.navigation;
const passParams = {waypoints:'["Boston, MA","Syracuse, NY"]'}
  return (
    <ScrollView style={styles.container}>
				<TextInputBox label='Start'></TextInputBox>
				<TextInputBox label='Destination'></TextInputBox>

				<Button title = 'Create New Journey!' onPress={() => createNewJourney(navigate,startTest,endTest,testType,testName)}/>
    </ScrollView>
  );
}
//button onpress - send to backend
LinksScreen.navigationOptions = {
  title: 'New Journey',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
	paddingTop: 20,
	paddingLeft: 20,
    backgroundColor: '#b0e0e6',
  },
});
