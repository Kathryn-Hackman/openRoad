import React from 'react';
import { Button, Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { TextInputBox } from '../components/TextInputBox';
import { NavigationEvents } from 'react-navigation';

var url = "";//manually enter your ip address
url = 'http://'+ url  +':5000/'

var startTest = "address 1"
var endTest = "address 2"
var name = "New Journey 7"

  
function createNewJourney(start,end) {
  
console.log("Creating New Journey...");
fetch(
	url+'newJourney?start='+encodeURIComponent(start)+"&end="+encodeURIComponent(end)+"&name="+encodeURIComponent(name)
)
	.then(res => res.json())
	.then(json => {
		console.log("Call response:");
		console.log(json);
		console.log("New Journey Created.");
	});
}


export default function LinksScreen(props) {
const {navigate} = props.navigation;
const passParams = {waypoints:'["Boston, MA","Syracuse, NY"]'}
  return (
    <ScrollView style={styles.container}>
				<TextInputBox label='Start'></TextInputBox>
				<TextInputBox label='Destination'></TextInputBox>

				<Button title = 'Create New Journey!' onPress={() => navigate('Route',passParams)}/>
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
