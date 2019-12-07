//user interests screen irl
import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { InterestButton } from '../components/InterestButton';
import '@expo/vector-icons';




export default function SettingsScreen(props) {




  var interestList = ['Hiking','Museum','Restaurant'];
  var buttonList = [];
console.log(props.navigation.state.params.startList);

  for (let i = 0; i < interestList.length; i++) {
    buttonList.push(
      <InterestButton navigation={props.navigation} interest = {interestList[i]} wholeParams = {props.navigation.state.params.wholeParams} startList = {props.navigation.state.params.startList} endList = {props.navigation.state.params.endList}></InterestButton>
    )
  }
  return (
    <ScrollView>
      <Text>What are your interests?</Text>
      {buttonList}
      <View style = {{ flexDirection: 'row'}}>
      </View>
    </ScrollView>
  );
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: 'white',
},

})

SettingsScreen.navigationOptions = {
  title: 'Open Road',
};
