//user interests screen irl
import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, Text, ScrollView, StyleSheet, Dimensions, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { InterestButton } from '../components/InterestButton';
import '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationEvents, NavigationActions, createAppContainer } from 'react-navigation';
import t from 'tcomb-form-native';

export default function SettingsScreen(props) {

  var interestList = ['Hiking','Museum','Restaurant', 'Shopping', 'Coffee Shop', 'Gas Station'];
  //var interestList = ['one', 'two', 'three', 'four'];
  var buttonList = [];
  for (let i = 0; i < interestList.length; i+=2) {
    buttonList.push(
      <InterestButton key = {interestList[i] + interestList[i+1]} navigation = {props.navigation} interest1 ={interestList[i]} interest2={interestList[i+1]} wholeParams = {props.navigation.state.params.wholeParams} startList = {props.navigation.state.params.startList} endList = {props.navigation.state.params.endList}></InterestButton>
    )
  }

const {navigate} = props.navigation;
  return (
    <LinearGradient colors = {['#00ecff', '#1b97a1']} style ={{flex:1}}>
      <View style = {styles.container}>
      </View>
      <Text style = {styles.text}>Which type of waypoint would you like to add?</Text>
      <View style = {styles.viewHeight}>
      {buttonList}
      </View>
    </LinearGradient>
  );
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create ({
  container: {
    //flexDirection: 'row',
    backgroundColor: 'white',
},
  text: {
    justifyContent: 'center',
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    fontFamily: 'work-sans',
    color: 'black'
  },
  textInput: {
    backgroundColor: 'white',
    margin: 10
  },

  viewHeight: {
    height: 450,
  },

  middleText: {
    fontSize: 20,
    justifyContent: 'center',
    fontFamily: 'work-sans',
    textAlign: 'center'
  }

})

SettingsScreen.navigationOptions = {
  title: 'Open Road',
};
