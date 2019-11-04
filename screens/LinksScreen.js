import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { TextInputBox } from '../components/TextInputBox';

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


export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>

      	<View>
					<TextInputBox label='Start'></TextInputBox>
					<TextInputBox label='Destination'></TextInputBox>
					
					<Text style={styles.getStartedText} onPress={() => createNewJourney(startTest,endTest)}>
					Create New Journey!
					</Text>
				</View>
    </ScrollView>
  );
}
//button onpress - send to backend
LinksScreen.navigationOptions = {
  title: 'user input',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
});
