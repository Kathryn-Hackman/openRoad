import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Button} from 'react-native';
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
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
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
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
  stylesheet: formStyles,
};

export default class LinksScreen extends Component {
  handleSubmit = () => {
      const {navigate} = this.props.navigation;
      const value = this._form.getValue();

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
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <Button
          title="Create Journey!"
          onPress={this.handleSubmit}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,

    backgroundColor: '#ffffff',
  },
});
