import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import { TextInputBox } from '../components/TextInputBox';

var url = "";//manually enter your ip address
url = 'http://'+ url  +':5000/'

var startTest = "address 1"
var endTest = "address 2"
var name = "New Journey 7"

  



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
