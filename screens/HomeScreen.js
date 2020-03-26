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
          <Image source = {require('../assets/images/finaldarklogo.png')} style = {{width: 200, height: 200}}></Image>
          <Text></Text>
          <Text style = {styles.titleText}>Open Road</Text>
          </View>
          <View>
          <TouchableOpacity disabled = {!hasSavedData} style = {styles.buttonStyle} onPress={() => navigate('Route', journeyInProgressJSON)}>
            <Text style = {styles.textStyle}>Resume previous journey</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttonStyle} onPress={() => navigate('Links')}>
            <Text style = {styles.textStyle}>Start a new journey</Text>
          </TouchableOpacity>
          </View>
        </LinearGradient>
      );
    }
  
}

const styles = StyleSheet.create({

  // actionButtonIcon: {
  //   fontSize: 20,
  //   height: 22,
  //   color: 'white',
  // },
    buttonStyle: {
      marginTop:10,
      paddingTop:15,
      paddingBottom:15,
      marginLeft:30,
      marginRight:30,
      marginBottom: 15,
      backgroundColor:'#ff9800',
      borderRadius:10,
      borderWidth: 2,
      borderColor: '#fff'
  
    },
    clearButtonStyle: {
      // if there's no previous saved journey set opacity = 0 to make this button invisible
      opacity: 0,

    },

    textStyle: {
      fontFamily: 'work-sans',
      color: 'white',
      fontSize: 20,
      textAlign: 'center',
      justifyContent: 'center'
    },

  container: {
    justifyContent: "center",
    alignItems: "center",
    height: '70%',
  },
  titleText: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'lato-bold',
    fontSize: 48
  }
});