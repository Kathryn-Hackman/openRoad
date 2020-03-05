import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import React, { useState, Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents, NavigationActions, createAppContainer } from 'react-navigation';
import { constants } from 'expo';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from 'react-navigation-stack';
import { Text } from 'react-native-elements';
import * as FileSystem from 'expo-file-system';


export default function HomeScreen(props) {
  //if there's a previous journey
  const [flag, setFlag] = useState(false);
  const [hasSavedData, setHasSavedData] = useState(false);
  
  journeyInProgressJSON = {};
  result = FileSystem.getInfoAsync(FileSystem.documentDirectory + 'workingJourney/');
  result.then(async function (res){
    setHasSavedData(await res.exists);
    console.log('inside result')
    // console.log(hasSavedData)
    if (hasSavedData == true) {
      journeyInProgressAsString = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'workingJourney/journey.txt/')
      console.log(journeyInProgressAsString)
      journeyInProgressJSON = await JSON.parse(journeyInProgressAsString);
      console.log(journeyInProgressJSON)
    }
    setFlag(true);
  });  
    const {navigate} = props.navigation;
    console.log(hasSavedData);
    if(flag == false){
      console.log("waiting")
      return (
        <LinearGradient colors = {['#ff9800', '#ffce07']} style ={{flex:1}}>
          <View style = {styles.container}>
          <Image source = {require('../assets/images/finaldarklogo.png')} style = {{width: 200, height: 200}}></Image>
          <Text></Text>
          <Text style = {styles.titleText}>Loading....</Text>
          </View>
        </LinearGradient>
      );
    } else {
      return (
        <LinearGradient colors = {['#ff9800', '#ffce07']} style ={{flex:1}}>
          <View style = {styles.container}>
          <TouchableOpacity disabled = {!hasSavedData} onPress={() => navigate('Route', journeyInProgressJSON)}>
            <Text>Resume creating previous journey</Text>
          </TouchableOpacity>
          <Image source = {require('../assets/images/finaldarklogo.png')} style = {{width: 200, height: 200}}></Image>
          <Text></Text>
          <Text style = {styles.titleText}>Open Road</Text>
          </View>
          <View>
          <Image source = {require('../assets/images/drawable-mdpi/path_244.png')}></Image>
          </View>
          <ActionButton onPress={() => navigate('Links')}>
            <Text>Start a new journey</Text>
          </ActionButton>
        </LinearGradient>
      );
    }
  
}

const styles = StyleSheet.create({

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    height: '80%',
  },
  titleText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'lato-bold',
    fontSize: 48
  }
});