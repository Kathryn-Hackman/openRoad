import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputBox } from '../components/TextInputBox';

var url = "https://openroadflaskapp.herokuapp.com/";
var startTest = "Syracuse, NY"
var endTest = "Boston, MA"
var testType = "rtj"
var testName = "New Journey 7"

import t from 'tcomb-form-native';
import { NavigationEvents } from 'react-navigation';
import { Image } from 'react-native-elements';

const Form = t.form.Form;

const User = t.struct({
  start: t.String,
  destination: t.String,
  returnToStart: t.Boolean,
  timeInHours: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      paddingTop: 10,
      paddingLeft: 30,
      marginBottom: 10
    }
  },
    textbox: {
      normal: {
      width: 250,
      height: 30,
      fontFamily: 'lato-light',
      paddingLeft: 10,
      borderRadius: 15,
      shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,
elevation: 9,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#eeeeee',
      backgroundColor: '#ffffff'
      }
  },
  controlLabel: {
    normal: {
      fontFamily: "work-sans",
      fontSize: 30,
      fontWeight: "600",
      fontStyle: "normal",
      letterSpacing: 0,
      textAlign: "left",
      color: "#eef9fe"
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    start: {
      error: 'Enter the place you will begin your trip from'
    },
    destination: {
      error: 'Enter the furthest destination on your trip'
    },
    returnToStart: {
      error: 'Choose whether or not you want to return to the starting place'
    },
    timeInHours: {
      error: 'Enter the amount of time in hours you want to spend on this road trip',
    },
  },
  stylesheet: formStyles,
};

export default class LinksScreen extends Component {
  handleSubmit = () => {
      const {navigate} = this.props.navigation;
      const value = this._form.getValue();
      if (value.returnToStart == null){
        value.returnToStart = false;
      }
      const jtype = value.returnToStart?'rtj':'owj';//round trip or one way journey
      const fullUrl = url+'newJourney?start='+encodeURIComponent(value.start)+"&end="+encodeURIComponent(value.destination)+"&type="+encodeURIComponent(jtype)+"&name="+encodeURIComponent(value.start + " to " + value.destination)+"&time="+encodeURIComponent(value.timeInHours*3600)

fetch(
	fullUrl
)
	.then(res => res.json())
	.then(json => {
		newJourneyParams = json;
    navigate('Route',newJourneyParams);
	});
}

  
  render() {
    return (
        <LinearGradient colors = {['#00ecff', '#1b97a1']} style ={{flex:1}}>
          <View style = {styles.logo}>
          <Image source = {require('../assets/images/finaldarklogo.png')} style = {{width: 80, height: 80}}></Image>
          </View>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <TouchableOpacity style = {styles.buttonStyle} onPress={this.handleSubmit}>
          <Text style = {styles.textStyle}>Create Journey!</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    paddingBottom: 20, 
    marginLeft: 'auto',
    paddingRight: 20,
    paddingTop: 20
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,

    backgroundColor: '#ffffff',
  },
  textStyle: {
    paddingTop: 50,
    fontFamily: 'work-sans',
    fontSize: 30,
    color: 'white'
  },
  buttonStyle: {
    paddingLeft:30 
  }
});
